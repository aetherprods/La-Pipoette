//imports
const cors = require('cors'),
      SocketServer = require('ws').Server,
      express = require('express'),
      next = require('next'),
      bodyParser = require('body-parser'),
      dotEnv = require('dotenv').config();


//variables
const port = parseInt(process.env.PORT, 10) || 3000,
      dev = process.env.NODE_ENV !== 'production';

//initializations
const app = next({ dev }),
      handler = app.getRequestHandler();

app.prepare().then(() => {
        const server = express();
        
        server.use(cors());
        server.use(bodyParser.json());
        server.use(bodyParser.urlencoded({extended: false}));
        

        


        server.get('*', (req, res) => {
            return handler(req, res);
        });

        server.post('/game_daemon', (req, res) => {
            let { playerOne, playerTwo, boardSize } = req.body

            let game = { playerOne, playerTwo, boardSize };

            wss.startGame(game);
            res.send(null);
        });

        server.listen(port, err => {
            if (err) throw err;
            console.log(`>Ready on http://localhost:${port}`);
        });

        /*******************/
        /* START WS SERVER */
        /*******************/                

        const wss = new SocketServer({ server });
     

        //set up users and history arrays
        wss.chatHistory = [];
        wss.users = {};
        wss.games = {};

        wss.updateUsers = function() {
            wss.clients.forEach((client) => {
                if (client.readyState === WebSocket.OPEN) {
                    client.send(JSON.stringify({type:"users", users:wss.users}));
                }
            })
        };
        wss.findSocket = function(userID) {
            wss.checkUserID(userID);
            
            let clients = [...wss.clients];

            let socket = clients[clients.findIndex((value) => {
                return value.userID == userID;
            })]

            return socket;
        }
        wss.startGame = function(game) {
            let { playerOne, playerTwo, boardSize } = game,
                clients = [...wss.clients];

            if(!(wss.checkUserID(playerOne.userID) && wss.checkUserID(playerTwo.userID))) {
                console.log("playerOne found:"+wss.checkUserID(playerOne.userID));
                console.log("playerTwo found:"+wss.checkUserID(playerTwo.userID));
                return;
            };


            const gameID = (`${playerOne.userID}${playerTwo.userID}`);
            wss.games[gameID] = {playerOne: playerOne.userID, playerTwo: playerTwo.userID}
            
            wss.users[playerOne.userID].inGame = true;
            wss.users[playerTwo.userID].inGame = true;
            
            let p = wss.findSocket(playerOne.userID);
            let q = wss.findSocket(playerTwo.userID);

            let start = { gameID: gameID,
                        playerOne: {
                            userID: p.userID,
                            name: wss.users[p.userID].name,
                            color: wss.users[p.userID].color
                        }, playerTwo: {
                            userID: q.userID,
                            name: wss.users[q.userID].name,
                            color: wss.users[q.userID].color
                        }, boardSize };

            p.send(JSON.stringify({ type:"game-start", game:start }));
            q.send(JSON.stringify({ type:"game-start", game:start }));
            wss.updateUsers();
        };
        wss.checkUserID = function(userID) {
            return (wss.users.hasOwnProperty(userID));
        }
        wss.updatePlayer = function (player, gameState, currentPlayer) {
            let socket = wss.findSocket(player);
            socket.send(JSON.stringify({ type: "game-move", gameState: gameState }));
            socket.send(JSON.stringify({ type: "set-current-player", currentPlayer: currentPlayer }));
        }

        wss.on('connection', function connection(ws, request) {       //set up global WebSocket listener for connections
            ws.isAlive = true;
            ws.userID;
            ws.on('pong', () => {
                ws.isAlive = true;
            });
            ws.on('close', function close() {
                delete (wss.users[this.userID]);
                wss.updateUsers();
            }); 

            ws.on('message', function incoming(message) {           //Connection-specific message listener
                let data = JSON.parse(message);                     //parse the message
                console.log(message);
               
                
                if (data.type == 'identification') {                //set up first-time connection, assign unique user id, transfer it securely back to client
                    let name = data.name,
                        color = data.color,
                        userID = color+name+Math.random().toString(10).slice(2,7);

                    ws.userID = userID;
                    ws.send(JSON.stringify({type:"identified", userID: userID}));
                    
                    wss.users[userID] = { userID: userID, name: name, color: color, inGame: false };
                    wss.updateUsers();
                } else if (data.type == 'get-users') {                     //update the user list
                    ws.send(JSON.stringify({type:"users", users:wss.users}))
                } else if (data.type == 'get-chat-history') {              //update the chat history
                    ws.send(JSON.stringify({type:"history",history:wss.chatHistory}));
                } else if (data.type == 'message') {                       //chat message parser
                    if(!wss.checkUserID(data.userID)) {return};

                    let { name, color } = wss.users[data.userID];                           
                    let message = {type: "message", timestamp: Date.now(), userID: data.userID, name: name, color: color, message: data.message };
                    wss.chatHistory.push(message);

                    wss.clients.forEach(function each(client) {
                        if (client.readyState === WebSocket.OPEN) {
                            client.send(JSON.stringify(message));
                        }
                    });
                } else if (data.type == 'game-move') {
                    //must do some legality checking here
                    //get our two relevant players from gameID
                    let p = wss.users[wss.games[data.gameID].playerOne],
                        q = wss.users[wss.games[data.gameID].playerTwo];

                    if (ws.userID == p.userID) {
                        wss.updatePlayer(p.userID, data.gameState, q);
                        wss.updatePlayer(q.userID, data.gameState, q);

                    } else if (ws.userID == q.userID) {
                        wss.updatePlayer(p.userID, data.gameState, p);
                        wss.updatePlayer(q.userID, data.gameState, p);
                    } else {
                        return;
                    }
                } else if (data.type == 'game-over') {
                    wss.users[ws.userID].inGame = false;
                    wss.updateUsers();
                    ws.send(JSON.stringify({ type:"game-over" }))
                }
            });
        });
        wss.on('error', function (error) {
            console.log(error);
        });

        setInterval(function ping() {
            wss.clients.forEach(function each(client) {
                if (client.isAlive === false) {
                    
                    return (() => {
                        client.terminate();
                        wss.updateUsers();
                    })
                };
          
              client.isAlive = false;
              client.ping();
            });
          }, 3000);

        /*****************/
        /* END WS SERVER */
        /*****************/
    })
    .catch(ex => {
      console.error(ex.stack);
      process.exit(1);
    });
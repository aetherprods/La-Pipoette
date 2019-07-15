//imports
const cors = require('cors'),
      next = require('next'),
      Pusher = require('pusher'),
      express = require('express'),
      bodyParser = require('body-parser'),
      dotEnv = require('dotenv').config();


//variables
const dev = process.env.NODE_ENV !== 'production',
      port = process.env.PORT || 3000;

//initializations
const app = next({ dev }),
      handler = app.getRequestHandler(),
      pusher = new Pusher({
        appId: process.env.PUSHER_APP_ID,
        key: process.env.PUSHER_APP_KEY,
        secret: process.env.PUSHER_APP_SECRET,
        cluster: process.env.PUSHER_APP_CLUSTER,
        forceTLS: true
      });

app.prepare()
    .then(() => {
        const server = express();
        let playersInGame = []

        server.use(cors());
        server.use(bodyParser.json());
        server.use(bodyParser.urlencoded({extended: false}));

        server.get('*', (req, res) => {
            return handler(req, res);
        });

        const chatHistory = { messages: [] };

        server.post('/remove_players', (req, res) => {
            playersInGame.splice(playersInGame.indexOf(req.body), 1);
        });

        server.post('/get_players', (req, res) => {
            res.send(playersInGame);
        });

        server.post('/game_daemon', (req, res) => {
            let { playerOne, playerTwo, boardSize } = req.body
            playersInGame.push(playerOne.id);
            playersInGame.push(playerTwo.id);

            let players = { playerOne, playerTwo, boardSize, channels: {pOne: `private-${playerOne.id}`, pTwo: `private-${playerTwo.id}`} };

            pusher.trigger(`private-${playerOne.id}`, 'game_started', players);
            pusher.trigger(`private-${playerTwo.id}`, 'game_started', players);            

            res.send(players);
        });

        server.post('/pusher/auth', (req, res) => {
            
            let socketId = req.body.socket_id;
            let channel = req.body.channel_name;
            let userId = req.body.color.slice(1,req.body.length+1)+req.body.username+Math.random().toString(10).slice(2,7);

            let presenceData = {
                user_id: userId,
                user_info: {
                    name: req.body.username,
                    color: req.body.color
                }
            };
            let auth = pusher.authenticate(socketId, channel, presenceData);

            res.send(auth);
        });

        server.post('/message', (req, res, next) => {
            const { activeUser, activeColor, message, timestamp } = req.body;
            const chat = { activeUser, activeColor, message, timestamp };

            chatHistory.messages.push(chat);
            pusher.trigger('presence-chat', 'new-message', { chat });

            res.json({...chatHistory, status: 'success' });
        });

        server.listen(port, err => {
            if (err) throw err;
            console.log(`>Ready on http://localhost:${port}`);
        });
    })
    .catch(ex => {
      console.error(ex.stack);
      process.exit(1);
    });

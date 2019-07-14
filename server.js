//imports
const cors = require('cors'),
      next = require('next'),
      Pusher = require('pusher'),
      express = require('express'),
      bodyParser = require('body-parser'),
      dotEnv = require('dotenv').config(),
      base64 = require('base-64');


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

        server.use(cors());
        server.use(bodyParser.json());
        server.use(bodyParser.urlencoded({extended: false}));

        server.get('*', (req, res) => {
            return handler(req, res);
        });

        const chatHistory = { messages: [] };


        server.post('/game_daemon', (req, res) => {
            let { playerOne, playerTwo } = req.body
            //let playerOne = { id, name, color } = req.body.playerOne;

            testData = base64.encode(playerOne.id.slice(3, 5)+playerTwo.id.slice(1,4));

            let players = { playerOne, playerTwo, channels: {pOne: `private-${playerOne.id}`, pTwo: `private-${playerTwo.id}`, game: `private-${testData}`} };


            pusher.trigger(`private-${playerOne.id}`, 'game_started', players);
            pusher.trigger(`private-${playerTwo.id}`, 'game_started', players);
            

            res.send(players);
        });

        server.post('/pusher/auth', (req, res) => {
            
            let socketId = req.body.socket_id;
            let channel = req.body.channel_name;
            let userId = req.body.color+req.body.username+Math.random().toString(10).slice(2,7);

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
            const { user, message, timestamp } = req.body;
            const chat = { user, message, timestamp };

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

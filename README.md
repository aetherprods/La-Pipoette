# La-Pipoette
Lightweight Box Game. Props to Édouard Lucas.

React application rendered server side by Next.JS using Express.JS for the server. App originally used Pusher (https://pusher.com/) to provide real-time interactive gameplay and chat functionality. The latest build implements a Websocket server and serves it over the ExpressJS http server to accomplish the same functions with additional security. 

Future changes should include end-to-end encryption of both the chat and game messages using the openpgp library. 

Hosted at http://la-pipoette.herokuapp.com/
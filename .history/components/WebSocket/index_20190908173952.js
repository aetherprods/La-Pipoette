import React from 'react';

class WebSocket extends React.Component {
    constructor(props) {
        super(props);

        this.connect = this.connect.bind(this);
    }

    connect() {
        alert("test");
        let socket = new WebSocket('ws://localhost:3030/');
        let that = this;

        socket.addEventListener('open', function (event) { //on open, send our identifying info
            socket.send(JSON.stringify({type:"identification", name: name, color: color}));
            that.props.setConnection(socket);  //plus, pass the connection up to our parent's state
            
            
        }, {once: true});
        socket.addEventListener('error', function (event) {
            console.log('error: '+event.data); 
        }, {once: true});

        
    }

    render() {
        return(<div>test
            {this.connect()}
        </div>);
    }
}

export default WebSocket;
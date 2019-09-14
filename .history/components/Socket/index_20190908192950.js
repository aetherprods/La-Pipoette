import React from 'react';

class Socket extends React.Component {
    constructor(props) {
        super(props);

        this.connect = this.connect.bind(this);
    }

    connect(){
        let that = this; 

        let connection = new Promise ((resolve, reject) => {
            let socket = new WebSocket('ws://localhost:3030/');   //open WebSocket connection         
            socket.addEventListener('open', function (event) {
                
                that.props.setConnection(socket);  //on open, pass the connection up to our parent's state

            }, {once: true});
            socket.addEventListener('error', function (event) {
                console.error('error: '+event.data); 
            });
        }, (reason) => {
            console.error(reason);
        }).catch((reason) => {
            console.error(reason);
        })

        return(<div></div>);
    }

    render(){return(<div>{this.connect()}</div>)};

}

export default Socket;
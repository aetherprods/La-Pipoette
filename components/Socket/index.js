import React from 'react';

class Socket extends React.Component {  //async WebSocket connection which passes the socket on to the parent upon entering OPEN state
    constructor(props) {
        super(props);

        this.connect = this.connect.bind(this);
    }

    connect(){
        let that = this; 

        let connection = new Promise ((resolve, reject) => {
            let host = location.origin.replace(/^http/, 'ws');
            let socket = new WebSocket(host);   //open WebSocket connection         
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
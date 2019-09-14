import React from 'react';
import OpenPGP from '../OpenPGP/index';

class Socket extends React.Component {  //async WebSocket connection which passes the socket on to the parent upon entering OPEN state
    constructor(props) {
        super(props);

        this.connect = this.connect.bind(this);
    }

    componentDidMount() {
        if (!this.props.pgp) {
            OpenPGP(); //pls implement me
        }        
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
/* 
function Socket (setSocket) {
    let connection = new Promise ((resolve, reject) => {
        let socket = new WebSocket('ws://localhost:3030/');   //open WebSocket connection         
        socket.addEventListener('open', function (event) {
            
            setSocket(socket);  //on open, pass the connection up to our parent's state

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
} */

export default Socket;
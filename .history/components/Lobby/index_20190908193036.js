import Lobby from "./Lobby.js";
import dynamic from 'next/dynamic';
import Socket from '../Socket/index.js';

/* const WebSocket = dynamic(
    () => import("..//components/WebSocket/index.js"),
    { ssr: false }
); */




class InfoTaker extends React.Component {
    constructor(props) {
        super(props);
        

        this.state = {
            name: '',
            color: '',
            userID: '',
            socket: null,
            submitted: false,
            connected: false
        };

        this.setInfo = this.setInfo.bind(this);
        this.setConnection = this.setConnection.bind(this);
    };

    setInfo (userID, name, color, submitted) {        
        this.setState({ 
            name: name,
            color: color,
            userID: userID,
            submitted: submitted
        });
    };

    setConnection (socket) {
        if (socket) {
            this.setState({
                socket: socket,
                connected: true
            });
        };
    };


    render() {
        if (this.state.submitted == false && this.state.connected == false) {
            return (
            <div>
                <Socket setConnection={this.setConnection} />
            </div>);
        }
        if (this.state.submitted == false && this.state.connected == true) {
            return (
                <div>
                    <div className="info-taker">
                        <Taker setInfo={this.setInfo} socket={this.state.socket}/>
                    </div>
                </div>);
        } else if (this.state.submitted == true && this.state.connected == true) {
            return (
                <div>
                    <div className="lobby">
                        <div>
                            <Lobby userID={this.state.userID} user={this.state.name} color={this.state.color} socket={this.state.socket} />
                        </div>
                    </div>
                </div>);
        }
    };
}



class Taker extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.connect = this.connect.bind(this);
        this.identify = this.identify.bind(this);
        this.confirm = this.confirm.bind(this);
    }

    
    identify(name, color, socket) {
        socket.addEventListener('message', this.confirm(), {once: true}); 
        socket.send(JSON.stringify({type:"identification", name: name, color: color}));

        console.log("test: in identify. name:"+name+" color:"+color)
        //this.props.socket.remove
    }

    confirm() {
        const confirm = function (event) {
            let data = JSON.parse(event.data);
    
            if (data.type == "confirmation"){
                console.log("testeez:"+JSON.stringify(data));
                return (data.userID);
            }};

        return (confirm);
    }

    connect(name, color, submitted) { //async WebSocket connection which passes on the socket upon entering OPEN state
        let that = this;
        let socket = this.state.socket;

        socket.send(JSON.stringify({type:"identification", name: name, color: color}));


        socket.addEventListener('message', function (event) { //once we receive a message->
            let data = JSON.parse(event.data);
            
            if (data.type == "identified"){ //->of type identified, we proceed to the lobby
                that.props.setInfo(data.userID, name, color, submitted);
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();


        let name = event.target.elements.namedItem("username").value;
        let nameOk = false;

        function checkName() {
            if (/\s/.test(name)) {
                alert("No whitespace in the name, please")
                return;
            } else if (/\W/.test(name)) {
                alert("No special characters, please. (Except underscore. We like underscore.)")
            } else {
                nameOk = true;
            }
        }

        //must write a checkColor function

        checkName();

        if (!!name && nameOk) {
            let name = event.target.elements.namedItem("username").value,
                color = event.target.elements.namedItem("color").value,
                submitted = true;
                            
            this.connect(name, color, submitted);            
        }

    }


    render() {
            return (
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Please enter your name and choose a color!<br></br>
                        <input type="text" name="username" />
                    </label>
                    <label>
                        <input type="color" name="color" />
                    </label><br></br>
                    <input type="submit" value="Submit" />
                </form>
            );
    }
}


export default InfoTaker;
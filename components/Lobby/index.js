import Chat from "./Chat.js";
import ActiveUsers from "./ActiveUsers.js";
import dynamic from 'next/dynamic';
//import Socket from '../Socket/index';

const Socket = dynamic(
    () => import("../Socket/index.js"),
    { ssr: false }
);

class InfoTaker extends React.Component {
    constructor(props) {
        super(props);
        

        this.state = {
            name: '',
            color: '',
            userID: '',
            socket: null,
            submitted: false,
            connected: false,
            pgp: null
        };

        this.setInfo = this.setInfo.bind(this);
        this.setConnection = this.setConnection.bind(this);
        this.setPGP = this.setPGP.bind(this);
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

    setPGP (pgp) {
        if (pgp) {
            this.setState({
                pgp: pgp
            });
        };
    };

    render() {
        if (this.state.submitted == false && this.state.connected == false) {
            return (
            <div>
                <Socket setConnection={this.setConnection} setPGP={this.setPGP} pgp={this.state.pgp} />
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
            let self = {
                userID: this.state.userID,
                name: this.state.name,
                color: this.state.color
            };

            return (
                <div>
                    <div className="lobby">
                    <div>
                        <Chat self={self} socket={this.state.socket} />
                        {/* <ChatBox user={this.props.user} color={this.props.color} socket={this.props.socket} /> */}
                    </div>
                    <div className="active-users">
                        <ActiveUsers self={self} socket={this.state.socket} />
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
    }

    connect(name, color, submitted) {
        let that = this,
            socket = that.props.socket;

        socket.addEventListener('message', function (event) { 
            let data = JSON.parse(event.data);
            
            if (data.type == "identified"){ 
                console.log("identified:"+data.userID);
                that.props.setInfo(data.userID, name, color, submitted);
            }
        }, {once: true});

        socket.send(JSON.stringify({type:"identification", name: name, color: color}));
    }

    handleSubmit(event) {
        event.preventDefault();

        function checkName(name) {
            if (/\s/.test(name)) {
                alert("No whitespace in the name, please")
                return false;
            } else if (/\W/.test(name)) {
                alert("No special characters, please. (Except underscore. We like underscore.)");
                return false;
            } else if (/\w/.test(name)) {
                return true;
            }
        }

        function checkColor(color) {
            if (/^#{1}[0123456789abcdef]{6}/.test(color)) {
                return true;
            } else {
                return false;
            }
        }

        if (checkName(event.target.elements.namedItem("name").value) && checkColor(event.target.elements.namedItem("color").value)) {
            let name = event.target.elements.namedItem("name").value,
                color = event.target.elements.namedItem("color").value,
                submitted = true;
                            
            this.connect(name, color, submitted);            
        } else {
            return;
        }

    }


    render() {
            return (
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Please enter your name and choose a color!<br></br>
                        <input type="text" name="name" />
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
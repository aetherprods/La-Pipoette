import ChatBox from "./ChatBox.js";
import ActiveUsers from "./ActiveUsers.js";




/* const Lobby = () => {
    return(
        <div>
            <div className="info-taker">
                <InfoTaker />
            </div>
        </div>);
}; */

class Lobby extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            color: '',
            userID: '',
            submitted: false
        };

        this.setInfo = this.setInfo.bind(this);
    };

    setInfo (name, color, userID, submitted) {
        
        this.setState({ 
            name: name,
            color: color,
            userID: userID,
            submitted: submitted
        });
    };

    render() {
        if (this.state.submitted == false) {
            return (
                <div>
                    <div className="info-taker">
                        <InfoTaker setInfo={this.setInfo}/>
                    </div>
                </div>);
        } else if (this.state.submitted == true) {
            return (
                <div>
                    <div className="lobby">
                        <div><ChatBox user={this.state.name} color={this.state.color} /></div>

                        <div className="active-users">
                            <ActiveUsers userName={this.state.name} userColor={this.state.color}/>
                        </div>

                        {/* <InfoTaker setInfo={this.setInfo}/> */}
                    </div>
                </div>);
        }
        
    };
}

class InfoTaker extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.authenticate = this.authenticate.bind(this);
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

        checkName();

        if (!!name && nameOk) {
            let name = event.target.elements.namedItem("username").value,
                color = event.target.elements.namedItem("color").value,
                userID = this.authenticate(name, color),
                submitted = true;

            

            this.props.setInfo(name, color, userID.userID, submitted);
        }

    }

    authenticate(name, color) {
        let userID;
        
        const socket = new WebSocket('ws://localhost:3030/');

        socket.addEventListener('open', function (event) {
            socket.send(JSON.stringify({type: "connection", name: name, color: color}));
        });

        socket.addEventListener('message', function (event) {
            let data = JSON.parse(event.data);
            alert(data.type);

            if (data.type == "confirmation"){
                userID = data.userID;                
            }

            if (data.type == "message") {
                //{type: "message", userId: data.userId, message: "Hello, World!"}
            }            
        });

        socket.addEventListener('error', function (event) {
            console.log('error: '+event.data); 
        });

        return ({socket: socket, userID: userID});
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

export default Lobby;
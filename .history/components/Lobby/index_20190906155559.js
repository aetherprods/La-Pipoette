import ChatBox from "./ChatBox.js";
import ActiveUsers from "./ActiveUsers.js";




const Lobby = () => {
    
    return(
        <div>
            <div className="info-taker">
                <InfoTaker />
            </div>
        </div>);
};

class InfoTaker extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            color: '',
            userID: '',
            submitted: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.authenticate = this.authenticate.bind(this);
    }

    componentDidMount(){
        this.authenticate();
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
            this.setState({
                name: event.target.elements.namedItem("username").value,
                color: event.target.elements.namedItem("color").value
            }, () => {
                this.setState({submitted: true}, () => {});
                return;
            });
        }

    }

    authenticate() {
        alert("help");
        let state = this;
        let name = this.state.name,
            color = this.state.color;
        
        const socket = new WebSocket('ws://localhost:3030/');

        socket.addEventListener('open', function (event) {
            socket.send(JSON.stringify({type: "connection", name: name, color: color}));
        });

        socket.addEventListener('message', function (event) {
            let data = JSON.parse(event.data);
            if (data.type == "confirmation"){
                state.setState({userID: data.userID})
            }

            //{type: "message", userId: data.userId, message: "Hello, World!"}
        });

        socket.addEventListener('error', function (event) {
            console.log('error: '+event.data); 
        });
    }

    render() {
        if (!this.state.submitted) {
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
        } else if (this.state.submitted) {
            
            return (<div>
                <div>
                    <ChatBox user={this.state.name} color={this.state.color} />
                </div>
                <div className="active-users">
                  <ActiveUsers userName={this.state.name} userColor={this.state.color}/>
                </div>
                </div>);
        }
    }
}

export default Lobby;
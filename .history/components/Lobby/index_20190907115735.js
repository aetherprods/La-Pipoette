import ChatBox from "./ChatBox.js";
import ActiveUsers from "./ActiveUsers.js";




class Lobby extends React.Component {
    constructor(props) {
        super(props);
        

        this.state = {
            name: '',
            color: '',
            userID: '',
            socket: null,
            submitted: false
        };

        this.setInfo = this.setInfo.bind(this);
        this.setConnection = this.setConnection.bind(this);
        this.setUID = this.setUID.bind(this);
    };

    setInfo (name, color, submitted) {        
        this.setState({ 
            name: name,
            color: color,
            submitted: submitted
        });
    };

    setConnection (socket) {
        this.setState({
            socket: socket
        });
    };

    setUID (userID) {
        this.setState({
            userID: userID
        });
    };

    render() {
        if (this.state.submitted == false) {
            return (
                <div>
                    <div className="info-taker">
                        <InfoTaker setConnection={this.setConnection} setInfo={this.setInfo} setUID={this.setUID} socket={this.state.socket}/>
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

                    </div>
                </div>);
        }
        
    };
}



class InfoTaker extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.connect = this.connect.bind(this);
        this.identify = this.identify.bind(this);
        this.confirm = this.confirm.bind(this);
    }

    
    identify(name, color, socket) {
        socket.addEventListener('message', this.confirm(), true); 
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

    connect(name, color, submitted) { //async WebSocket connection which resolves the socket upon receiving OPEN state from the server
        let connection = new Promise ((resolve, reject) => {

            let socket = new WebSocket('ws://localhost:3030/');
            socket.addEventListener('open', function (event) {
                socket.send(JSON.stringify({ type: "connection" }));  
                resolve(socket);            
            });
            socket.addEventListener('error', function (event) {
                console.log('error: '+event.data); 
            });

        });
        connection.then(socket => {//first we submit our name and color
            this.props.setConnection(socket);
            this.props.setInfo(name, color, submitted);

            /* const confirm = function (event) {
                console.log("testconfirm"+JSON.parse(event.data));
                let data = JSON.parse(event.data);
                console.log("testconfirm2");

                if (data.type == "confirmation"){
                    console.log("testeez:"+JSON.stringify(data));
                    return (data.userID);
                }}; */
                    
            socket.addEventListener('message', function (event) {
                console.log("testconfirm"+JSON.stringify(event.data));
                //let data = JSON.parse(event.data);

                if (event.data.type == "identified"){
                    console.log("testeez:"+JSON.stringify(data));
                    return (data.userID);
                }}); 

            socket.send(JSON.stringify({type:"identification", name: name, color: color}));

            
        }, reason => {
            console.error(reason);
        }).then(userID => {//then we set the userID given by the server
            console.log("testo:"+userID);
            this.props.setUID(userID);
        }, reason => {
            console.error(reason);
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


export default Lobby;
import ChatBox from "./ChatBox.js";
import ActiveUsers from "./ActiveUsers.js";

class Lobby extends React.Component {
    constructor(props) {
        super (props);


    };

    render() {
        return(<div>
            <div className="chat-box">
                <ChatBox user={this.props.user} color={this.props.color} socket={this.props.socket} />
            </div>
            <div className="active-users">
                <ActiveUsers socket={this.socket} />
            </div>
        </div>);
    };
}

export default Lobby;
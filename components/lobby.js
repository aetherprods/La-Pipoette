import ChatBox from "./ChatBox/ChatBox.js";
import ActiveUsers from "./ChatBox/ActiveUsers.js";

const Lobby = () => {
    return(<div>
        <div className="info-taker">
            <InfoTaker />
        </div>
        </div>);
};

class InfoTaker extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            color: '',
            submitted: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();


        let name = event.target.elements.namedItem("username").value;
        let nameOk = false;

        function checkName() {
            if (/\s/.test(name)) {
                alert("No whitespace in the name, please")
                return;
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
                this.setState({submitted: true});
                return;
            });
        }

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
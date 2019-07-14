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
        

        if (event.target.elements.namedItem("username").value) {
            this.setState({
                name: event.target.elements.namedItem("username").value,
                color: event.target.elements.namedItem("color").value
            }, () => {
                this.setState({submitted: true});
                return;
            });
        }
        event.preventDefault();


    }

    render() {
        if (!this.state.submitted) {
            return (
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Please enter your name and choose a color!<br></br>
                        <input type="text" name="username" />
                    </label><br></br>
                    <label><select name="color">
                        <option value="blue">Blue</option>
                        <option value="brown">Brown</option>
                        <option value="chartreuse">Chartreuse</option>
                        <option value="coral">Coral</option>
                        <option value="cyan">Cyan</option>
                        <option value="gainsboro">Gainsboro</option>
                        <option value="darkorchid">Dark Orchid</option>
                        <option value="fuchsia">Fuchsia</option>
                        <option value="indigo">Indigo</option>
                        <option value="olive">Olive</option>
                        <option value="royalblue">Royal Blue</option>
                        <option value="turquoise">Turquoise</option>
                    </select></label>
                    <input type="submit" value="Submit" />
                </form>
            );
        } else if (this.state.submitted) {
            return (<div>
                <div>
                    <ChatBox user={this.state.name} color={this.state.color} />
                </div>
                <div>
                  <ActiveUsers userName={this.state.name} userColor={this.state.color}/>
                </div>
                </div>);
        }
    }
}

export default Lobby;
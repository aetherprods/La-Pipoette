class Chat extends React.Component {
    constructor(props) {
        super(props);

        this.state = { messages: [] };
        this.message = this.message.bind(this);
    }

    message(event) {
      let that = this; 

      let data = JSON.parse(event.data);
        if (data.type == "message") { 
          const messages = that.state.messages;
          messages.push(data);
          that.setState({ messages: messages }, () => {
            document.getElementById("chat-box").scrollTop = document.getElementById("chat-box").scrollHeight;
          });
        }

        if (data.type == "history") {
          const messages = that.state.messages;
          
          for (let message in data.history) {
            messages.push(data.history[message]);
          }
          that.setState({ messages: messages }, () => {
            document.getElementById("chat-box").scrollTop = document.getElementById("chat-box").scrollHeight;
          });
        }
    }

    componentDidMount() {
      let socket = this.props.socket;

      socket.addEventListener('message', this.message, true);
      socket.send(JSON.stringify({ type:"get-chat-history" }));
    }

    componentWillUnmount() {
      this.props.socket.removeEventListener('message', this.message, true);
    }

    handleKeyUp = evt => {
        const value = evt.target.value;
        
        if (evt.keyCode === 13 && !evt.shiftKey) {
          const chat = { type: "message", userID: this.props.self.userID, message: value };
          
          evt.target.value = '';
          this.props.socket.send(JSON.stringify(chat));
        }
      }

    render() {
      return (<div>
        <div >
          <h2>Welcome {this.props.self.name}!</h2>
        </div>

        <div className="chat-box" id="chat-box">
          <MessageHistory messages={this.state.messages} />
        </div>

        <div>
          <textarea onKeyUp={this.handleKeyUp} placeholder="Enter a chat message"></textarea>
        </div>
        </div>)
    }
      
}

class MessageHistory extends React.Component {
  render() {
    return(<div>
      {this.props.messages.map((message, index) => {
         
          return(<div key={index}>
            {(index==0 || message.userID!=this.props.messages[index-1].userID) && 
            <u><b><big>{message.name}</big></b></u>}

            <ChatMessage message={message.message} color={message.color} />
  
          </div>) 
      })}
    </div>)
  }
}

class ChatMessage extends React.Component {
  render() {
      return (<div style={{color: `${this.props.color}`}}>{this.props.message}</div>);
  }
}

export default Chat;
import axios from 'axios';
import Pusher from 'pusher-js';
import ChatMessage from './ChatMessage';


class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = { chats: [] };
    }
    componentDidMount() {
        this.pusher = new Pusher (process.env.PUSHER_APP_KEY, {
            cluster: process.env.PUSHER_APP_CLUSTER,
            authEndpoint: "/pusher/auth",
            forceTLS: true,
            auth: {
                params: {
                    username: this.props.activeUser,
                    color: this.props.activeColor
                }
            }
        });
        this.channel = this.pusher.subscribe('presence-chat');

        this.channel.bind('pusher:subscription_succeeded', (data) => {
          axios.post('/message')
                .then(response => {
                    const chats = response.data.messages;
                    this.setState({ chats }, () => {
                      document.getElementById("chat-box").scrollTop = document.getElementById("chat-box").scrollHeight;
                    });
                });
        });
        

        this.channel.bind('new-message', ({ chat = null }) => {
            const { chats } = this.state;
            chat && chats.push(chat);
            this.setState({ chats }, () => {
              document.getElementById("chat-box").scrollTop = document.getElementById("chat-box").scrollHeight;
            });
        });


    }
    componentWillUnmount() {
        this.pusher.disconnect();
    }
    handleKeyUp = evt => {
        const value = evt.target.value;
        
        if (evt.keyCode === 13 && !evt.shiftKey) {
          const { activeUser, activeColor } = this.props;
          const chat = { activeUser, activeColor, message: value, timestamp: +new Date };
          
          evt.target.value = '';
          axios.post('/message', chat);
        }
      }
    render() {
        return (this.props.activeUser && <div><div className="chat-box" id="chat-box">
        
          <div >
            <h2>Welcome {this.props.activeUser}!</h2>
          </div>

          <div >
    
            {this.state.chats.map((chat, index) => {
            
              const previous = Math.max(0, index - 1);
              const previousChat = this.state.chats[previous];
              
              const isFirst = previous === index;
              const inSequence = chat.activeUser === previousChat.activeUser;
              const hasDelay = Math.ceil((chat.timestamp - previousChat.timestamp) / (1000 * 60)) > 1;

              
              
              return (
                <div key={index}>
                  { (isFirst || !inSequence || hasDelay) && (
                    <div >
                      
                      <u><b><big>{!!(chat.activeUser) ? chat.activeUser : null}</big></b></u>
                    </div>
                  ) }
                  
                  <ChatMessage message={chat.message} color={chat.activeColor}/>
                  
                </div>
              );
              
            })}
    
          </div>
                              
        </div>
          <div>
          <textarea onKeyUp={this.handleKeyUp} placeholder="Enter a chat message"></textarea>
        </div> </div>)
      }
      
}

export default Chat;
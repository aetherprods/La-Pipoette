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
                    this.setState({ chats });
                });
        });
        this.channel.bind('pusher:subscription_error', (error) => {
          alert("ok\n"+error);
        });
        

        this.channel.bind('new-message', ({ chat = null }) => {
            const { chats } = this.state;
            chat && chats.push(chat);
            this.setState({ chats });
        });

    }
    componentWillUnmount() {
        this.pusher.disconnect();
    }
    handleKeyUp = evt => {
        const value = evt.target.value;
        
        if (evt.keyCode === 13 && !evt.shiftKey) {
          const { activeUser: user } = this.props;
          const chat = { user, message: value, timestamp: +new Date };
          
          evt.target.value = '';
          axios.post('/message', chat);
        }
      }
    render() {
        return (this.props.activeUser && <div>
        
          <div >
            <h2>Welcome {this.props.activeUser}!</h2>
          </div>

          <div >
    
    {this.state.chats.map((chat, index) => {
    
      const previous = Math.max(0, index - 1);
      const previousChat = this.state.chats[previous];
      
      const isFirst = previous === index;
      const inSequence = chat.user === previousChat.user;
      const hasDelay = Math.ceil((chat.timestamp - previousChat.timestamp) / (1000 * 60)) > 1;
      
      
      return (
        <div key={index}>
          { (isFirst || !inSequence || hasDelay) && (
            <div >
              
              <u><b><big>{chat.user || 'Anonymous'}</big></b></u>
            </div>
          ) }
          
          <ChatMessage message={chat.message} />
          
        </div>
      );
      
    })}
    
  </div>
          
          <div className="border-top border-gray w-100 px-4 d-flex align-items-center bg-light" style={{ minHeight: 90 }}>
            <textarea className="form-control px-3 py-2" onKeyUp={this.handleKeyUp} placeholder="Enter a chat message" style={{ resize: 'none' }}></textarea>
          </div>
          
        </div> )
      }
      
    /* render() {
    return (this.props.activeUser && <div>
    
        <div className="border-bottom border-gray w-100 d-flex align-items-center bg-white" style={{ height: 90 }}>
            <h2 className="text-dark mb-0 mx-4 px-62">{this.props.activeUser}</h2>
        </div>
        <div className="px-4 pb-4 w-100 d-flex flex-row flex-wrap align-items-start align-content-start position-relative" style={{ height: 'calc(100% - 180px)', overflowY: 'scroll' }}>
        {this.state.chats.map((chat, index) => {
        
            const previous = Math.max(0, index - 1);
            const previousChat = this.state.chats[previous];
            const position = chat.user === this.props.activeUser ? "right" : "left";
            
            const isFirst = previous === index;
            const inSequence = chat.user === previousChat.user;
            const hasDelay = Math.ceil((chat.timestamp - previousChat.timestamp) / (1000 * 60)) > 1;
            
            
            return (
                <div key={index}>
                
                <p>
                <ChatMessage message={chat.message} position={position} />
                </p>
                </div>
            );
        
        })}
        </div>
        <div className="border-top border-gray w-100 px-4 d-flex align-items-center bg-light" style={{ minHeight: 90 }}>
            <textarea className="form-control px-3 py-2" onKeyUp={this.handleKeyUp} placeholder="Enter a chat message" style={{ resize: 'none' }}></textarea>
        </div>
        
    </div> )
    } */
}

export default Chat;
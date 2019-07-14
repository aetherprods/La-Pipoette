import React from 'react';
import Chat from "../ChatBox/Chat.js";

class ChatBox extends React.Component {
    constructor (props) {
        super(props);
        this.state = { 
          user: props.user,
          color: props.color 
        };
    }

    handleKeyUp = evt => {
        if (evt.keyCode === 13) {
          const user =  evt.target.value;
          this.setState({ user });
        }
      }

    render() {
        const { user } = this.state;
      
        const nameInputStyles = {
          background: 'transparent',
          color: '#999',
          border: 0,
          borderBottom: '1px solid #666',
          borderRadius: 0,
          fontSize: '3rem',
          fontWeight: 500,
          boxShadow: 'none !important'
        };
        
        return (
          <div>
                <section>
                    { user && <Chat activeUser={this.state.user} activeColor={this.state.color}/> }
                </section>
          </div>
              
        );
    }
}

export default ChatBox;
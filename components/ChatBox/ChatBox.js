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
        
        return (
          <div >
                <section> 
                    { user && <Chat activeUser={this.state.user} activeColor={this.state.color}/> }
                </section> 
          </div>
              
        );
    }
}

export default ChatBox;
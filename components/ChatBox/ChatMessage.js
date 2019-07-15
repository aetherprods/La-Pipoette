class ChatMessage extends React.Component {
    render() {
        const { message, color } = this.props;

        return (<div style={{color: `${color}`}}>{message}</div>);
    }
}

export default ChatMessage;
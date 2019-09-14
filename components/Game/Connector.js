class Connector extends React.Component {
    render() {
        return (
        <button className={this.props.id} onClick={this.props.clickHandler}></button>
    );}
}

export default Connector;
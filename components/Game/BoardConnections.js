import Connection from './Connection.js';

class BoardConnections extends React.Component {
    renderConnections () {
        let tempArray = [];

        for (let i=0; i<this.props.connectionsArray.length; i++) {
             tempArray.push(i);
        };
        return (<div>{tempArray.map((i) => {
            return <Connection connectorA={this.props.connectionsArray[i][0]} connectorB={this.props.connectionsArray[i][1]} />;
        })}</div>);
        
    }
    render () {
        return (
            <div>{this.renderConnections()}</div>
        );
    }
}

export default BoardConnections;
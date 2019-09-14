import LineTo from 'react-lineto';

class Connection extends React.Component {
    render() {
        let connectorA = `connector${this.props.connectorA}`,
            connectorB = `connector${this.props.connectorB}`;
    
        return (
            <LineTo from={connectorA} to={connectorB} borderWidth={2} borderColor="black"/>
        );
        
    }
}

export default Connection;
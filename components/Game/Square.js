import LineTo from 'react-lineto';

class Square extends React.Component {
    render() {
        let connectorA = `connector${this.props.connectorA}`,
            connectorB = `connector${this.props.connectorB}`,
            connectorC = `connector${this.props.connectorC}`,
            connectorD = `connector${this.props.connectorD}`;
        return (<div>
            <LineTo from={connectorA} to={connectorB} borderColor={this.props.color} borderWidth={3}/>
            <LineTo from={connectorC} to={connectorD} borderColor={this.props.color} borderWidth={3}/>
            <LineTo from={connectorA} to={connectorC} borderColor={this.props.color} borderWidth={3}/>
            <LineTo from={connectorA} to={connectorD} borderColor={this.props.color} borderWidth={3}/>
            <LineTo from={connectorD} to={connectorB} borderColor={this.props.color} borderWidth={3}/>
            <LineTo from={connectorC} to={connectorB} borderColor={this.props.color} borderWidth={3}/>
        </div>);
    }
}

export default Square;
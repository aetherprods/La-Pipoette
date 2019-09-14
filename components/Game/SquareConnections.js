import Square from './Square.js';

class SquareConnections extends React.Component {
    renderSquares() {
        let tempArray = [];

        for (let i=0; i<this.props.squaresArray.length; i++) {
            tempArray.push(i);
        }

        return(<div>
            {tempArray.map((i) => {
                return <Square color={this.props.squaresArray[i]['color']} connectorA={this.props.squaresArray[i]['square'][0][0]} connectorB={this.props.squaresArray[i]['square'][1][1]} connectorC={this.props.squaresArray[i]['square'][0][1]} connectorD={this.props.squaresArray[i]['square'][1][0]} />;
            })}
        </div>);
    }
    render() {
        return (
            <div>{this.renderSquares()}</div>
        );
    }
}

export default SquareConnections;
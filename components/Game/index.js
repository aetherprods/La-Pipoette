import GameInstance from './GameInstance.js';


class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playerOne: this.props.playerOne, 
            playerTwo: this.props.playerTwo,
            self: this.props.self,
            boardSize: this.props.boardSize
        };
 
    }
    render () { 

        return (
            <GameInstance socket={this.props.socket} gameID={this.props.gameID} self={this.state.self} playerOne={this.state.playerOne} playerTwo={this.state.playerTwo} boardSize={this.state.boardSize} />
        );
    }
}

export default Game;
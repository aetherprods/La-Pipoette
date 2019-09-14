import LineTo from 'react-lineto';
import GameInstance from './GameInstance.js';


class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playerOne: this.props.players[0], 
            playerTwo: this.props.players[1],
            currentPlayer: this.props.players[0],
            player: this.props.self,
            boardSize: this.props.boardSize
        };
 
    }
    render () { 

        return (
            <GameInstance player={this.state.player} playerOne={this.state.playerOne} playerTwo={this.state.playerTwo} boardSize={this.state.boardSize} opponentChannel={this.state.player.username==this.state.playerOne.username ? this.props.playerTwoChannel : this.props.playerOneChannel} playerChannel={this.state.player.username==this.state.playerOne.username ? this.props.playerOneChannel : this.props.playerTwoChannel}/>
        );
    }
}

export default Game;
import Connector from './Connector.js';
import BoardConnections from './BoardConnections.js';
import SquareConnections from './SquareConnections.js';

class Board extends React.Component {
    renderBoard(x, y) {
        let xArr = [], 
            yArr = [],
            xy = [];
        
        for (let i=0; i<x; i++) {
            xArr.push(i);
        };
        for (let j=0; j<y; j++) {
            yArr.push(j);      
        };
        for (let l=1; l<=x*y; l++) {
            xy.push(l);
        }
        
        let iterator = xy.values();

        return(<div>
            {yArr.map(y => <tr key={y}>{
                xArr.map((x) => 
                <td key={iterator.value}>{this.renderConnector(iterator.next().value)}</td>
            )}</tr>)}
            </div>);
    }

    renderConnector(i) {
        let connectorId = `connector${i}`
        return(
        <Connector id={connectorId} clickHandler={() => this.props.clickHandler(i)}/>
    );}

    calculateScore() {
        let playerOneScore = 0,
            playerTwoScore = 0;
        for (let i=0; i<this.props.squaresArray.length; i++) {
            if (this.props.squaresArray[i]['player'] == this.props.playerOne['username']) {
                playerOneScore++;
            }
            if (this.props.squaresArray[i]['player'] == this.props.playerTwo['username']) {
                playerTwoScore++;
            }
        }

        if (this.props.gameOver == true) {
            
            if(playerOneScore>playerTwoScore){
                return (
                    <div>
                        <button onClick={this.props.triggerGameRestart}>End Game</button><br></br>
                        {this.props.playerOne['username']} has won!<br></br>
                        {this.props.playerOne['username']}: {playerOneScore}<br></br>
                        {this.props.playerTwo['username']}: {playerTwoScore}
                    </div>
                );
            } else if (playerTwoScore>playerOneScore) {
                return (
                    <div>
                        <button onClick={this.props.triggerGameRestart}>End Game</button><br></br>
                        {this.props.playerTwo['username']} has won!<br></br>
                        {this.props.playerTwo['username']}: {playerTwoScore}<br></br>
                        {this.props.playerOne['username']}: {playerOneScore}
                    </div>
                );
            } else if (playerOneScore==playerTwoScore) {
                return (
                    <div>
                        <button onClick={this.props.triggerGameRestart}>End Game</button><br></br>
                        It's a tie!<br></br>
                        {this.props.playerOne['username']}: {playerOneScore}<br></br>
                        {this.props.playerTwo['username']}: {playerTwoScore}
                    </div>
                );
                
            };

        };


        return (
            <div>
                It is {this.props.currentPlayer['username']}'s turn!<br></br><br></br>
                The current score is:<br></br>
                {this.props.playerOne['username']}'s score: {playerOneScore}<br></br>
                {this.props.playerTwo['username']}'s score: {playerTwoScore}
            </div>
        );
    }

    render() {return (
        <div >
            <div className="game-board absolute-center">
                {this.renderBoard(this.props.x,this.props.y)}
                {this.calculateScore()}
            </div>
            <div className="game-board-connections">
                <BoardConnections connectionsArray={this.props.connectionsArray} />
            </div>
            <div className="square-connections">
                <SquareConnections squaresArray={this.props.squaresArray} playerColor={this.props.currentPlayer['color']}/>
            </div>
            <div className="game-status">
                
            </div>
        </div>
    );}
}

export default Board;
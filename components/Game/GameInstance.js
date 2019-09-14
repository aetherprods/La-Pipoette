import Pusher from 'pusher-js';
import axios from 'axios';
import Board from './Board.js';

class GameInstance extends React.Component {
    constructor(props) {
        super(props);

        let x = props.boardSize[0]['x'],
            y = props.boardSize[1]['y'],
            connectionsArraySize = ((x-1)*y)+((y-1)*x);

        this.state = {
            gameOver: false,
            currentPlayer: this.props.playerOne,
            firstConnector: 0,
            secondConnector: 0,
            connectionsArray: [],
            squareConditions: this.generateSquareConditions(x, y),
            squaresArray: [],
            legalCombos: this.generateLegalCombos(x, y)
        };

        
        this.pusher = new Pusher(process.env.PUSHER_APP_KEY, {
            cluster: process.env.PUSHER_APP_CLUSTER,
            authEndpoint: "/pusher/auth",
            forceTLS: true,
            auth: {
                params: {
                    username: this.props.player.username,
                    color: this.props.player.color
                }
            }
        });
    }

    componentDidMount () {
        this.opponentChannel = this.pusher.subscribe(this.props.opponentChannel);
        this.playerChannel = this.pusher.subscribe(this.props.playerChannel);



         this.playerChannel.bind('client-set-connections', (data) => {
            this.setState({connectionsArray: data}, () => {});
         });
         this.playerChannel.bind('client-set-squares', (data) => {
            this.setState({squaresArray: data}, () => {});
         });
         this.playerChannel.bind('client-change-current-player', (data) => {
            this.setState({currentPlayer: (this.state.currentPlayer==this.props.playerOne ? this.props.playerTwo : this.props.playerOne)}, () => {});
         });
         this.playerChannel.bind('client-game-over', (data) => {
            this.setState({ gameOver: true });
            
        });

    }

    componentWillUnmount () {
        this.pusher.disconnect();
    }

    generateSquareConditions(x,y) {
        let tempArray = [];

        for(let i=1; i<=((x-1)*(y-1))+y; i++){
            if(i%x!=0 && i<x*y-x){
                tempArray.push([[i, i+1],[i+x, i+1+x],[i, i+x],[i+1, i+1+x]]);
            }
        }

        return tempArray;
    }
    generateLegalCombos(x, y) {
        let tempArray = [];

        for (let i=1; i<=x*y; i++) {
            if(i == 1) { //if isTopLeftCorner
                tempArray.push([i, i+1]);
                tempArray.push([i, i+x]);
            }else if(i == x) { //if isTopRightCorner
                tempArray.push([i, i-1]);
                tempArray.push([i, i+x]);
            }else if(i == (((x*y)-x)+1)) { //if isBottomLeftCorner
                tempArray.push([i, i-x]);
                tempArray.push([i, i+1]);
            }else if(i == x*y) { //if isBottomRightCorner
                tempArray.push([i, i-1]);
                tempArray.push([i, i-x]);
            }else if(i > 1 && i < x) { //if isTopEdge
                tempArray.push([i, i-1]);
                tempArray.push([i, i+x]);
                tempArray.push([i, i+1]);
            }else if(i > (((x*y)-x)+1) && i < x*y) { //if isBottomEdge
                tempArray.push([i, i-1]);
                tempArray.push([i, i-x]);
                tempArray.push([i, i+1]);
            }else if((i-1)%x==0 && i>1 && i<(x*y)-x) { //if isLeftEdge
                tempArray.push([i, i-x]);
                tempArray.push([i, i+1]);
                tempArray.push([i, i+x]);
            }else if(i%x==0 && i>x && i<(x*y)-1) { //if isRightEdge
                tempArray.push([i, i-x]);
                tempArray.push([i, i-1]);
                tempArray.push([i, i+x]);
            }else {//is central
                tempArray.push([i, i-x]);
                tempArray.push([i, i-1]);
                tempArray.push([i, i+x]);
                tempArray.push([i, i+1]);
            }        
        } 
        return tempArray;        
    }
    generateSquares() {
        //checks connections array and update state as to squares
        let squareConditions = this.state.squareConditions.slice(),
            connectionsArray = this.state.connectionsArray.slice();
        let squaresArray = this.state.squaresArray.slice();
        
        
        for (let i=0; i<squareConditions.length; i++) {
            let A=false, B=false, C=false, D=false;
            let sA=false, sB=false, sC=false, sD=false;

            let tempArray = squareConditions[i];
            const [a, b, c, d] = squareConditions[i];

            for(let j=0; j<connectionsArray.length; j++) {
                if (connectionsArray[j][0]==a[0] && connectionsArray[j][1]==a[1]) {
                    A = true;
                } else if (connectionsArray[j][0]==b[0] && connectionsArray[j][1]==b[1]) {
                    B = true;
                } else if (connectionsArray[j][0]==c[0] && connectionsArray[j][1]==c[1]) {
                    C = true;
                } else if (connectionsArray[j][0]==d[0] && connectionsArray[j][1]==d[1]) {
                    D = true;
                }
            }

            for(let l=0; l<squaresArray.length; l++) {
                for (let k=0; k<squaresArray[l]['square'].length; k++) {
                    //squaresArray[l]['square'] contains the 4 connections describing a square:
                    //squaresArray[l]['square'][k] contains the [x,y] to check against squareConditions[i]
                    if(squaresArray[l]['square'][k][0]==a[0] && squaresArray[l]['square'][k][1]==a[1]) {
                        sA = true;
                    } else if(squaresArray[l]['square'][k][0]==b[0] && squaresArray[l]['square'][k][1]==b[1]) {
                        sB = true;
                    } else if(squaresArray[l]['square'][k][0]==c[0] && squaresArray[l]['square'][k][1]==c[1]) {
                        sC = true;
                    } else if(squaresArray[l]['square'][k][0]==d[0] && squaresArray[l]['square'][k][1]==d[1]) {
                        sD = true;
                    }
                }
            }
            if ((A && B && C && D) && !(sA && sB && sC && sD)) { //i.e., if (connectionsArray contains all of the elements of a single squareCondition)
                
                squaresArray.push({square: tempArray, player: this.state.currentPlayer['username'], color: this.state.currentPlayer['color']});
                this.setState({squaresArray: squaresArray}, () => {
                    this.opponentChannel.trigger('client-set-squares', squaresArray);
                    this.checkEndGame(); 
                    return;
                });
                
            }

        }
        if (squaresArray.length == this.state.squaresArray.length) {
            this.setState({currentPlayer: (this.state.currentPlayer==this.props.playerOne ? this.props.playerTwo : this.props.playerOne) }, () => {
                this.opponentChannel.trigger('client-change-current-player', 'null');
                return;
            });
        }

               

        
        return;
    }
    checkEndGame(){
        let squaresArray = this.state.squaresArray.slice();
        let x = this.props.boardSize[0]['x'];
        let y = this.props.boardSize[1]['y']
        if (squaresArray.length == (x-1)*(y-1)) {

            this.setState({ gameOver: true }, () => {});
            this.opponentChannel.trigger('client-game-over', 'null');

            return;
        }
        return;
    }
    
    

    connectTwo(a, b) {
        //is it my turn? if not, return
        if (this.state.currentPlayer['username']!==this.props.player.username) {
            alert("it's not your turn!");
            return;
        }
        

        let testArray = [a, b],
            legalcombos = this.state.legalCombos;

        for (let i=0; i<legalcombos.length; i++) {
            const [x, y] = legalcombos[i];
            if ((testArray[0] === x && testArray[1] === y) || (testArray[1] === x && testArray[0] === y)) {
                
                let tempArray = this.state.connectionsArray.slice();
                //has it already been connected?
                let found = tempArray.find(n => (n[0] == [x,y][0] && n[1] == [x,y][1]));
                if (!!found == true){
                    alert("invalid selection");
                    return;
                }
                //has its inverse been connecter?
                found = tempArray.find(n => (n[0] == [x,y][1] && n[1] == [x,y][0]));
                if (!!found == true){
                    alert("invalid selection");
                    return;
                }
                //good to go
                tempArray.push([x,y]);


                this.setState({connectionsArray: tempArray}, () => {
                    this.opponentChannel.trigger('client-set-connections', tempArray);

                    this.generateSquares();
                    
                    return;
                });
                
                return;
            } 
        
        }
        alert("invalid selection");
        this.setState((state, props) => {
            return {firstConnector: state.firstConnector * 0, secondConnector: state.secondConnector * 0}
        });
        return;
    }
    clickHandler(i){
        if (!this.state.firstConnector && !this.state.secondConnector) {
            this.setState((state, props) => {
                return {firstConnector: state.firstConnector + i}
            });
        } else if (!!this.state.firstConnector && !this.state.secondConnector) {
            this.setState((state, props) => {
                return {secondConnector: state.secondConnector + i}
            }, () => {
                this.connectTwo(this.state.firstConnector, this.state.secondConnector);
            });
        } else if (!!this.state.firstConnector && !!this.state.secondConnector) {
            this.setState((state, props) => {
                return {firstConnector: (state.firstConnector * 0) + i, secondConnector: state.secondConnector * 0}
            });      
        }
        
    }
    triggerGameRestart () {
        this.playerChannel.trigger('client-restart-game', 'null');

        axios.post('/remove_players', { player: this.props.player.id })
                    .then((response) => {

                    });
    }

    render () {

        return (
        <div className="game-instance">
            <Board clickHandler={(i) => {this.clickHandler(i)}} x={this.props.boardSize[0]['x']} y={this.props.boardSize[1]['y']} connectionsArray={this.state.connectionsArray} currentPlayer={this.state.currentPlayer} playerOne={this.props.playerOne} playerTwo={this.props.playerTwo} squaresArray={this.state.squaresArray} gameOver={this.state.gameOver} triggerGameRestart={() => {this.triggerGameRestart()}}/>
            
        </div>
    );}

}

export default GameInstance;
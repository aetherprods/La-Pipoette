import LineTo from 'react-lineto';
import Chat from "../components/Chat.js";

class Game extends React.Component {
    render () { return (
        <GameInstance players={[{username: "timmy", color: "red"}, {username: "bobby", color: "blue"}]} boardSize={[{x: 4}, {y: 4}]}/>
    );}
}
class GameInstance extends React.Component {
    constructor(props) {
        super(props);

        let x = props.boardSize[0]['x'],
            y = props.boardSize[1]['y'],
            connectionsArraySize = ((x-1)*y)+((y-1)*x);

        this.state = {
            currentPlayer: this.props.players[0],
            firstConnector: 0,
            secondConnector: 0,
            //connectionsArray: Array(connectionsArraySize).fill({connection: [], isConnected: false}),
            connectionsArray: [],
            squareConditions: this.generateSquareConditions(x, y),
            squaresArray: [],
            legalCombos: this.generateLegalCombos(x, y)
        };
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
        
        //let tempArray = [];
        
        for (let i=0; i<squareConditions.length; i++) {
            //A=false; B=false; C=false; D=false;
            //sA=false; sB=false; sC=false; sD=false;
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
                    //squaresArray[l]['square'] contains the 4 elements of 
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
                //have to check if squaresArray contains squareConditions[i]
                squaresArray.push({square: tempArray, player: this.state.currentPlayer['username'], color: this.state.currentPlayer['color']});
                this.setState({squaresArray: squaresArray}, () => {
                    //alert("yep"); 
                    return;
                });
                
            } else if ((A && B && C && D)) {//only change player if we didn't find a square
                
            }


        }
        if (squaresArray.length == this.state.squaresArray.length) {
            this.setState({currentPlayer: (this.state.currentPlayer==this.props.players[0] ? this.props.players[1] : this.props.players[0]) }, () => {
                return;
            });
        }
        this.setState({}, () => {
            this.checkEndGame(); 
            return; 
        })

        

        
        return;
    }
    checkEndGame(){
        let squaresArray = this.state.squaresArray.slice();
        let x = this.props.boardSize[0]['x'];
        let y = this.props.boardSize[1]['y']
        if (squaresArray.length == (x-1)*(y-1)) {
            alert("end of game");
            return;
        }
        return;
    }
    connectTwo(a, b) {
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
                    this.generateSquares();
                    //this.checkEndGame();
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

    render () {return (
        <div className="game-instance">
            <Board clickHandler={(i) => {this.clickHandler(i)}} x={this.props.boardSize[0]['x']} y={this.props.boardSize[1]['y']} connectionsArray={this.state.connectionsArray} currentPlayer={this.state.currentPlayer} playerOne={this.props.players[0]} playerTwo={this.props.players[1]} squaresArray={this.state.squaresArray}/>
            
        </div>
    );}

}
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
            {yArr.map(y => <tr>{
                xArr.map((x) => 
                <td>{this.renderConnector(iterator.next().value)}</td>
            )}</tr>)}
            </div>);
    }

    renderConnector(i) {
        let connectorId = `connector${i}`
        return(
        <Connector key={i} id={connectorId} clickHandler={() => this.props.clickHandler(i)}/>
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
        return (
            <div>
                {this.props.playerOne['username']}'s score: {playerOneScore}<br></br>
                {this.props.playerTwo['username']}'s score: {playerTwoScore}
            </div>
        );
    }

    render() {return (
        <div className="absolute-center">
            <div className="game-board">
                {this.renderBoard(this.props.x,this.props.y)}
            </div>
            <div className="game-board-connections">
                <BoardConnections connectionsArray={this.props.connectionsArray} />
            </div>
            <div className="square-connections">
                <SquareConnections squaresArray={this.props.squaresArray} playerColor={this.props.currentPlayer['color']}/>
            </div>
            <div className="game-status">
                It is {this.props.currentPlayer['username']}'s turn!<br></br><br></br>
                The current score is: {this.calculateScore()}
            </div>
            <div className="chat-box">
                <ChatBox />

                
            </div>
        </div>
    );}
}

class ChatBox extends React.Component {
    constructor (props) {
        super(props);
        this.state = { user: null }
    }

    handleKeyUp = evt => {
        if (evt.keyCode === 13) {
          const user =  evt.target.value;
          this.setState({ user });
        }
      }

    render() {
        const { user } = this.state;
      
        const nameInputStyles = {
          background: 'transparent',
          color: '#999',
          border: 0,
          borderBottom: '1px solid #666',
          borderRadius: 0,
          fontSize: '3rem',
          fontWeight: 500,
          boxShadow: 'none !important'
        };
        
        return (
          <div>
          
            <main className="container-fluid position-absolute h-100 bg-dark">
            
              <div className="row position-absolute w-100 h-100">
              
                <section className="col-md-8 d-flex flex-row flex-wrap align-items-center align-content-center px-5">
                  <div className="px-5 mx-5">
                  
                    <span className="d-block w-100 h1 text-light" style={{marginTop: -50}}>
                      {
                        user
                          ? (<span>
                              <span style={{color: '#999'}}>Hello!</span> {user}
                            </span>)
                          : `What is your name?`
                      }
                    </span>
                    
                    { !user && <input type="text" className="form-control mt-3 px-3 py-2" onKeyUp={this.handleKeyUp} autoComplete="off" style={nameInputStyles} /> }
                    
                  </div>
                </section>
                
                <section className="col-md-4 position-relative d-flex flex-wrap h-100 align-items-start align-content-between bg-white px-0">
                    { user && <Chat activeUser={user} /> }
                </section>
                
              </div>
              
            </main>
            
          </div>
        );
    }
}

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
class Connector extends React.Component {
    render() {
        return (
        <button className={this.props.id} key={this.props.key} onClick={this.props.clickHandler}>{this.props.key}</button>
    );}
}
class Connection extends React.Component {
    render() {
        let connectorA = `connector${this.props.connectorA}`,
            connectorB = `connector${this.props.connectorB}`;
    
        return (
            <LineTo from={connectorA} to={connectorB} borderWidth={2} borderColor="black"/>
        );
        
    }
}
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

export default Game;
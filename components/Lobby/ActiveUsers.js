import axios from 'axios';
import Game from '../Game/index.js';

class ActiveUsers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            gameLink: false,
            self: {},
            playerOne: {},
            playerTwo: {},
            boardSize: {}
        }


        this.inviteFunction = this.inviteFunction.bind(this);
        this.message = this.message.bind(this);        
    }

   

    message(event) {
        let data = JSON.parse(event.data);

        if (data.type == 'users') {
            this.setState({ users: data.users });
        }

        if (data.type == 'game-start') {
            this.setState({ 
                gameLink: true,
                gameID: data.game.gameID,
                playerOne: data.game.playerOne,
                playerTwo: data.game.playerTwo,
                boardSize: data.game.boardSize
            });
        }

        if (data.type == 'game-over') {
            this.setState({ 
                gameLink: false,
                gameID: null,
                playerOne: {},
                playerTwo: {},
                boardSize: {}
            });
        }
    }

    componentDidMount() {
        this.setState({ self: this.props.self });
        
        this.props.socket.addEventListener('message', this.message, true);
        this.props.socket.send(JSON.stringify({ type:"get-users" }));
        
    }
    componentWillUnmount() {
        this.props.socket.removeEventListener('message', this.message, true);
        this.props.socket.close();
    }

    inviteFunction(data) {
        let target = { userID: data.currentTarget.dataset.userid },
            self = this.state.self;
            
        if (target.userID == self.userID) {
            alert ("you can't play yourself!");
            return;
        };

        if (this.state.gameLink) {
            alert("you can't play while in game!")
            return;
        };
        

        if (this.state.users[target.userID].inGame) {
            alert("you can't play someone who's in a game!");
            return;
        } else {
            let xDone = false, yDone = false;

            let x = prompt("Board width?");
            function checkX() {
                if (x == null) {
                    return false;
                };
                if (!(/^[0-9]+$/.test(x))) {        //could have used isNaN()
                    x = prompt("Please only input numbers");
                    checkX();
                };
                if (x<2) {
                    x = prompt("Please only input numbers greater than 1");
                    checkX();
                };
                if ((/^[0-9]+$/.test(x)) && x>1) {
                    xDone = true;
                };
            };
            checkX();

            let y = prompt("Board height?");
            function checkY() {
                if (y == null) {
                    return false;
                };
                if (!(/^[0-9]+$/.test(y))) {
                    y = prompt("Please only input numbers");
                    checkY();
                };
                if (y<2) {
                    y = prompt("Please only input numbers greater than 1");
                    checkY();
                };
                if ((/^[0-9]+$/.test(y)) && y>1) {
                    yDone = true;
                };
            };
            checkY();



            if (xDone && yDone) {
                axios.post('/game_daemon', { playerOne: {userID: self.userID}, playerTwo: target, boardSize: {x: x, y: y} });
            };
        }
    }


    render () {
        let users = this.state.users
        let usersIter = Object.keys(this.state.users);
        
        let gameLink = this.state.gameLink;

        return (<div>
            <div>
                {!!gameLink && <Game self={this.state.self} playerOne={this.state.playerOne} playerTwo={this.state.playerTwo} boardSize={this.state.boardSize} gameID={this.state.gameID} socket={this.props.socket} />}
            </div>
            <div>
                
                {usersIter.map((user, index) => <div key={index}><a href="#" onClick={this.inviteFunction} data-userid={users[user].userID}>
                    <User user={users[user].name}/>
                </a></div>)}
            </div>
        </div>)

    }
};

class User extends React.Component {
    render () {
        return (<div>
           {this.props.user}
        </div>);
    };
};





export default ActiveUsers;
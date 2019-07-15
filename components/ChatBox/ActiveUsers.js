import axios from 'axios';
import Pusher from 'pusher-js';
import Game from '../game.js';

class ActiveUsers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            helped: false,
            gameLink: false,
            self: {},
            playerOne: {},
            playerOneChannel: '',
            playerTwo: {},
            playerTwoChannel: '',
            gameChannel: ''
        }

        this.pusher = new Pusher(process.env.PUSHER_APP_KEY, {
            cluster: process.env.PUSHER_APP_CLUSTER,
            authEndpoint: "/pusher/auth",
            forceTLS: true,
            auth: {
                params: {
                    username: this.props.userName,
                    color: this.props.userColor
                }
            }
        });


        
        this.onlineChannel = this.pusher.subscribe("presence-online-channel");
        this.helperFunction = this.helperFunction.bind(this);
        this.inviteFunction = this.inviteFunction.bind(this);
        

        
    }

    componentDidMount() {
        this.onlineChannel.bind('pusher:subscription_succeeded', (members) => { 
            let me = this.onlineChannel.members.me;
            let users = this.state.users;

            for (let member of Object.getOwnPropertyNames(members['members'])) {
                users.push({
                    id: member,
                    user: members['members'][member]['name'],
                    color: members['members'][member]['color']
                });
            };


            let userIds = [];

            

            let userToBeAdded = {
                id: me.id,
                user: me.info.name,
                color: me.info.color};

            for (let i=0; i<users.length; i++) {
                userIds.push(users[i]['id']);
            }


            
            let found = userIds.find((userId) => {
                return userId == userToBeAdded['id'];
            });

            if (found) {
                this.setState({ users: users });
            } else if (!found) {
                return null;
            }
        });
        this.onlineChannel.bind('pusher:subscription_error', (data) => {
            alert("error\n"+data);
        });

        this.onlineChannel.bind('pusher:member_added', (user) => {
            let users = this.state.users;

            let userToBeAdded = {
                id: user.id,
                user: user.info.name,
                color: user.info.color
            };
            
            users.push(userToBeAdded);

            this.setState({users: users}); 
        });
        this.onlineChannel.bind('pusher:member_removed', (user) => {
            let users = this.state.users;

            let userIds = [];
            let userToBeRemoved = {
                id: user.id,
                user: user.info.name,
                color: user.info.color
            };
            for (let i=0; i<users.length; i++) {
                userIds.push(users[i]['id']);
            };

            let indexToRemove = userIds.findIndex((id) => {
                return id==userToBeRemoved['id'];
            });
            if(indexToRemove>-1) {
            users.splice(indexToRemove, 1);
            this.setState({users: users}); 
            };
        });

        
    }
    componentWillUnmount() {
        this.pusher.disconnect();
    }


    helperFunction() {
        if(this.state.helped == false){
            this.privateChannel = this.pusher.subscribe(`private-${this.onlineChannel.members.me.id}`);
            
            this.privateChannel.bind('game_started', (response) => {
                let self = {
                    id: this.onlineChannel.members.me.id,
                    name: this.onlineChannel.members.me.info.name,
                    color: this.onlineChannel.members.me.info.color
                };
                this.setState({ 
                    gameLink: true,
                    playerOne: response.playerOne,
                    playerOneChannel: response.channels.pOne,
                    playerTwo: response.playerTwo,
                    playerTwoChannel: response.channels.pTwo,
                    gameChannel: response.channels.game,
                    self: self,
                    boardSize: response.boardSize
                });
            });

            this.privateChannel.bind('client-restart-game', (data) => {
                this.setState({ gameLink: false });
                axios.post('/remove_players', [this.onlineChannel.members.me.id])
                    .then((response) => {

                    });
            });

            this.setState({ helped: true });
        }
    }

    inviteFunction(data) {
        let playersInGame;
        let target = {
            id: data.currentTarget.dataset.userid,
            name: data.currentTarget.dataset.username,
            color: data.currentTarget.dataset.usercolor
        };

        let self = {
            id: this.onlineChannel.members.me.id,
            name: this.onlineChannel.members.me.info.name,
            color: this.onlineChannel.members.me.info.color
        };
        


        if (data.currentTarget.dataset.userid == this.onlineChannel.members.me.id) {
            alert ("you can't play yourself!");
            return;
        };

        if (this.state.gameLink) {
            alert("you can't play while in game!")
            return;
        }


        axios.post('/get_players')
            .then((response) => {
                playersInGame = response.data;
                if (playersInGame.includes(target.id)) {
                    alert("you can't play someone who's in a game!");
                    return;
                } else {
                    let xDone = false, yDone = false;

                    let x = prompt("Board width?");
                    function checkX() {
                        if (x == null) {
                            return;
                        };
                        if (!(/^[0-9]+$/.test(x))) {
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
                            return;
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
                        axios.post('/game_daemon', { playerOne: self, playerTwo: target, boardSize: {x: x, y: y} });
                    };
                }
            });
    }


    render () {

        let users = this.state.users;
        let gameLink = this.state.gameLink;

        let tempArray = [];
        for (let i=0; i<=users.length; i++) {
            tempArray.push(i);
        };
        let useritr = tempArray.values();
        let nameitr = tempArray.values();
        let iditr = tempArray.values();
        let coloritr = tempArray.values();

        if(users[0]) {
            this.helperFunction();



            return (<div>
                <div>
                    {!!gameLink && <Game self={{username: this.state.self.name, color: this.state.self.color}} players={[{username: this.state.playerOne.name, color: this.state.playerOne.color}, {username: this.state.playerTwo.name, color: this.state.playerTwo.color}]} playerOneChannel={this.state.playerOneChannel} playerTwoChannel={this.state.playerTwoChannel} gameChannel={this.state.gameChannel} boardSize={[{x: this.state.boardSize['x']}, {y: this.state.boardSize['y']}]}/>}
                </div>
                
                <div>
                    {users.map((user) => <div><a href="#" onClick={this.inviteFunction} data-userid={users[iditr.next().value]['id']} data-username={users[nameitr.next().value]['user']} data-usercolor={users[coloritr.next().value]['color']}><u>
                        <User user={users[useritr.next().value]['user']} />
                        </u></a></div>)}
                </div>
            </div>);


        } else {
            return null;
        }

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
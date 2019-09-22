module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"static/development/pages/index.js": 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../../../" + ({}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Game/Board.js":
/*!**********************************!*\
  !*** ./components/Game/Board.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Connector_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Connector.js */ "./components/Game/Connector.js");
/* harmony import */ var _BoardConnections_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BoardConnections.js */ "./components/Game/BoardConnections.js");
/* harmony import */ var _SquareConnections_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SquareConnections.js */ "./components/Game/SquareConnections.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class Board extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  renderBoard(x, y) {
    let xArr = [],
        yArr = [],
        xy = [];

    for (let i = 0; i < x; i++) {
      xArr.push(i);
    }

    ;

    for (let j = 0; j < y; j++) {
      yArr.push(j);
    }

    ;

    for (let l = 1; l <= x * y; l++) {
      xy.push(l);
    }

    let iterator = xy.values();
    return __jsx("div", null, yArr.map(y => __jsx("tr", {
      key: y
    }, xArr.map(x => __jsx("td", {
      key: iterator.value
    }, this.renderConnector(iterator.next().value))))));
  }

  renderConnector(i) {
    let connectorId = `connector${i}`;
    return __jsx(_Connector_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
      id: connectorId,
      clickHandler: () => this.props.clickHandler(i)
    });
  }

  calculateScore() {
    let playerOneScore = 0,
        playerTwoScore = 0;

    for (let i = 0; i < this.props.squaresArray.length; i++) {
      if (this.props.squaresArray[i]['player'] == this.props.playerOne.name) {
        playerOneScore++;
      }

      if (this.props.squaresArray[i]['player'] == this.props.playerTwo.name) {
        playerTwoScore++;
      }
    }

    if (this.props.gameOver == true) {
      if (playerOneScore > playerTwoScore) {
        return __jsx("div", null, __jsx("button", {
          onClick: this.props.triggerGameRestart
        }, "End Game"), __jsx("br", null), this.props.playerOne.name, " has won!", __jsx("br", null), this.props.playerOne.name, ": ", playerOneScore, __jsx("br", null), this.props.playerTwo.name, ": ", playerTwoScore);
      } else if (playerTwoScore > playerOneScore) {
        return __jsx("div", null, __jsx("button", {
          onClick: this.props.triggerGameRestart
        }, "End Game"), __jsx("br", null), this.props.playerTwo.name, " has won!", __jsx("br", null), this.props.playerTwo.name, ": ", playerTwoScore, __jsx("br", null), this.props.playerOne.name, ": ", playerOneScore);
      } else if (playerOneScore == playerTwoScore) {
        return __jsx("div", null, __jsx("button", {
          onClick: this.props.triggerGameRestart
        }, "End Game"), __jsx("br", null), "It's a tie!", __jsx("br", null), this.props.playerOne.name, ": ", playerOneScore, __jsx("br", null), this.props.playerTwo.name, ": ", playerTwoScore);
      }

      ;
    }

    ;
    return __jsx("div", null, "It is ", this.props.currentPlayer.userID == this.props.playerOne.userID ? this.props.playerOne.name : this.props.playerTwo.name, "'s turn!", __jsx("br", null), __jsx("br", null), "The current score is:", __jsx("br", null), this.props.playerOne.name, "'s score: ", playerOneScore, __jsx("br", null), this.props.playerTwo.name, "'s score: ", playerTwoScore);
  }

  render() {
    return __jsx("div", null, __jsx("div", {
      className: "game-board absolute-center"
    }, this.renderBoard(this.props.x, this.props.y), this.calculateScore()), __jsx("div", {
      className: "game-board-connections"
    }, __jsx(_BoardConnections_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
      connectionsArray: this.props.connectionsArray
    })), __jsx("div", {
      className: "square-connections"
    }, __jsx(_SquareConnections_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
      squaresArray: this.props.squaresArray
      /* playerColor={this.props.currentPlayer['color']} */

    })), __jsx("div", {
      className: "game-status"
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Board);

/***/ }),

/***/ "./components/Game/BoardConnections.js":
/*!*********************************************!*\
  !*** ./components/Game/BoardConnections.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Connection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Connection.js */ "./components/Game/Connection.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class BoardConnections extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  renderConnections() {
    let tempArray = [];

    for (let i = 0; i < this.props.connectionsArray.length; i++) {
      tempArray.push(i);
    }

    ;
    return __jsx("div", null, tempArray.map(i => {
      return __jsx(_Connection_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
        connectorA: this.props.connectionsArray[i][0],
        connectorB: this.props.connectionsArray[i][1]
      });
    }));
  }

  render() {
    return __jsx("div", null, this.renderConnections());
  }

}

/* harmony default export */ __webpack_exports__["default"] = (BoardConnections);

/***/ }),

/***/ "./components/Game/Connection.js":
/*!***************************************!*\
  !*** ./components/Game/Connection.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_lineto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-lineto */ "react-lineto");
/* harmony import */ var react_lineto__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_lineto__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class Connection extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    let connectorA = `connector${this.props.connectorA}`,
        connectorB = `connector${this.props.connectorB}`;
    return __jsx(react_lineto__WEBPACK_IMPORTED_MODULE_1___default.a, {
      from: connectorA,
      to: connectorB,
      borderWidth: 2,
      borderColor: "black"
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Connection);

/***/ }),

/***/ "./components/Game/Connector.js":
/*!**************************************!*\
  !*** ./components/Game/Connector.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

class Connector extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return __jsx("button", {
      className: this.props.id,
      onClick: this.props.clickHandler
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Connector);

/***/ }),

/***/ "./components/Game/GameInstance.js":
/*!*****************************************!*\
  !*** ./components/Game/GameInstance.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Board_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Board.js */ "./components/Game/Board.js");



var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



class GameInstance extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(props) {
    super(props);
    console.log(props.boardSize);

    let x = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(props.boardSize.x, 10),
        y = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(props.boardSize.y, 10),
        connectionsArraySize = (x - 1) * y + (y - 1) * x;

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
    this.gameMessage = this.gameMessage.bind(this);
  }

  gameMessage(event) {
    let data = JSON.parse(event.data);

    if (data.type == "game-move") {
      this.setState({
        connectionsArray: data.gameState
      });
      this.generateSquares();
    }

    if (data.type == "set-current-player") {
      this.setState({
        currentPlayer: data.currentPlayer
      });
    }
  }

  sendMove(connectionsArray) {
    this.props.socket.send(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()({
      type: "game-move",
      gameID: this.props.gameID,
      gameState: connectionsArray
    }));
  }

  componentDidMount() {
    this.props.socket.addEventListener('message', this.gameMessage, true);
  }

  componentWillUnmount() {
    this.props.socket.removeEventListener('message', this.gameMessage, true);
  }

  generateSquareConditions(x, y) {
    let tempArray = [];

    for (let i = 1; i <= (x - 1) * (y - 1) + y; i++) {
      if (i % x != 0 && i < x * y - x) {
        tempArray.push([[i, i + 1], [i + x, i + 1 + x], [i, i + x], [i + 1, i + 1 + x]]);
      }
    }

    return tempArray;
  }

  generateLegalCombos(x, y) {
    let tempArray = [];

    for (let i = 1; i <= x * y; i++) {
      if (i == 1) {
        //if isTopLeftCorner
        tempArray.push([i, i + 1]);
        tempArray.push([i, i + x]);
      } else if (i == x) {
        //if isTopRightCorner
        tempArray.push([i, i - 1]);
        tempArray.push([i, i + x]);
      } else if (i == x * y - x + 1) {
        //if isBottomLeftCorner
        tempArray.push([i, i - x]);
        tempArray.push([i, i + 1]);
      } else if (i == x * y) {
        //if isBottomRightCorner
        tempArray.push([i, i - 1]);
        tempArray.push([i, i - x]);
      } else if (i > 1 && i < x) {
        //if isTopEdge
        tempArray.push([i, i - 1]);
        tempArray.push([i, i + x]);
        tempArray.push([i, i + 1]);
      } else if (i > x * y - x + 1 && i < x * y) {
        //if isBottomEdge
        tempArray.push([i, i - 1]);
        tempArray.push([i, i - x]);
        tempArray.push([i, i + 1]);
      } else if ((i - 1) % x == 0 && i > 1 && i < x * y - x) {
        //if isLeftEdge
        tempArray.push([i, i - x]);
        tempArray.push([i, i + 1]);
        tempArray.push([i, i + x]);
      } else if (i % x == 0 && i > x && i < x * y - 1) {
        //if isRightEdge
        tempArray.push([i, i - x]);
        tempArray.push([i, i - 1]);
        tempArray.push([i, i + x]);
      } else {
        //is central
        tempArray.push([i, i - x]);
        tempArray.push([i, i - 1]);
        tempArray.push([i, i + x]);
        tempArray.push([i, i + 1]);
      }
    }

    return tempArray;
  }

  generateSquares() {
    //checks connections array and update state as to squares
    let squareConditions = this.state.squareConditions.slice(),
        connectionsArray = this.state.connectionsArray.slice(),
        squaresArray = this.state.squaresArray.slice();

    for (let i = 0; i < squareConditions.length; i++) {
      let A = false,
          B = false,
          C = false,
          D = false;
      let sA = false,
          sB = false,
          sC = false,
          sD = false;
      let tempArray = squareConditions[i];
      const [a, b, c, d] = squareConditions[i];

      for (let j = 0; j < connectionsArray.length; j++) {
        if (connectionsArray[j][0] == a[0] && connectionsArray[j][1] == a[1]) {
          A = true;
        } else if (connectionsArray[j][0] == b[0] && connectionsArray[j][1] == b[1]) {
          B = true;
        } else if (connectionsArray[j][0] == c[0] && connectionsArray[j][1] == c[1]) {
          C = true;
        } else if (connectionsArray[j][0] == d[0] && connectionsArray[j][1] == d[1]) {
          D = true;
        }
      }

      for (let l = 0; l < squaresArray.length; l++) {
        for (let k = 0; k < squaresArray[l]['square'].length; k++) {
          //squaresArray[l]['square'] contains the 4 connections describing a square:
          //squaresArray[l]['square'][k] contains the [x,y] to check against squareConditions[i]
          if (squaresArray[l]['square'][k][0] == a[0] && squaresArray[l]['square'][k][1] == a[1]) {
            sA = true;
          } else if (squaresArray[l]['square'][k][0] == b[0] && squaresArray[l]['square'][k][1] == b[1]) {
            sB = true;
          } else if (squaresArray[l]['square'][k][0] == c[0] && squaresArray[l]['square'][k][1] == c[1]) {
            sC = true;
          } else if (squaresArray[l]['square'][k][0] == d[0] && squaresArray[l]['square'][k][1] == d[1]) {
            sD = true;
          }
        }
      }

      if (A && B && C && D && !(sA && sB && sC && sD)) {
        //i.e., if (connectionsArray contains all of the elements of a single squareCondition)
        squaresArray.push({
          square: tempArray,
          player: this.state.currentPlayer['name'],
          color: this.state.currentPlayer['color']
        });
        this.setState({
          squaresArray: squaresArray
        }, () => {
          /* this.opponentChannel.trigger('client-set-squares', squaresArray); */
          this.checkEndGame();
          return;
        });
      }
    }

    if (squaresArray.length == this.state.squaresArray.length) {
      this.setState({
        currentPlayer: this.state.currentPlayer == this.props.playerOne ? this.props.playerTwo : this.props.playerOne
      }, () => {
        /* this.opponentChannel.trigger('client-change-current-player', 'null'); */
        return;
      });
    }

    return;
  }

  checkEndGame() {
    let squaresArray = this.state.squaresArray.slice();

    let x = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(this.props.boardSize.x, 10),
        y = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(this.props.boardSize.y, 10);

    if (squaresArray.length == (x - 1) * (y - 1)) {
      this.setState({
        gameOver: true
      }, () => {});
      /* this.opponentChannel.trigger('client-game-over', 'null'); */

      return;
    }

    return;
  }

  connectTwo(a, b) {
    //is it my turn? if not, return
    if (this.state.currentPlayer.userID !== this.props.self.userID) {
      alert("it's not your turn!");
      return;
    }

    let testArray = [a, b],
        legalcombos = this.state.legalCombos;

    for (let i = 0; i < legalcombos.length; i++) {
      const [x, y] = legalcombos[i];

      if (testArray[0] === x && testArray[1] === y || testArray[1] === x && testArray[0] === y) {
        let tempArray = this.state.connectionsArray.slice(); //has it already been connected?

        let found = tempArray.find(n => n[0] == [x, y][0] && n[1] == [x, y][1]);

        if (!!found == true) {
          alert("invalid selection");
          return;
        } //has its inverse been connecter?


        found = tempArray.find(n => n[0] == [x, y][1] && n[1] == [x, y][0]);

        if (!!found == true) {
          alert("invalid selection");
          return;
        } //good to go


        tempArray.push([x, y]);
        this.setState({
          connectionsArray: tempArray
        }, () => {
          this.sendMove(tempArray);
          return;
        });
        return;
      }
    }

    alert("invalid selection");
    this.setState((state, props) => {
      return {
        firstConnector: state.firstConnector * 0,
        secondConnector: state.secondConnector * 0
      };
    });
    return;
  }

  clickHandler(i) {
    if (!this.state.firstConnector && !this.state.secondConnector) {
      this.setState((state, props) => {
        return {
          firstConnector: state.firstConnector + i
        };
      });
    } else if (!!this.state.firstConnector && !this.state.secondConnector) {
      this.setState((state, props) => {
        return {
          secondConnector: state.secondConnector + i
        };
      }, () => {
        this.connectTwo(this.state.firstConnector, this.state.secondConnector);
      });
    } else if (!!this.state.firstConnector && !!this.state.secondConnector) {
      this.setState((state, props) => {
        return {
          firstConnector: state.firstConnector * 0 + i,
          secondConnector: state.secondConnector * 0
        };
      });
    }
  }

  triggerGameRestart() {
    /* this.playerChannel.trigger('client-restart-game', 'null'); */
    this.props.socket.send(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()({
      type: "game-over",
      player: this.props.self.userID
    }));
  }

  render() {
    return __jsx("div", {
      className: "game-instance"
    }, __jsx(_Board_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
      clickHandler: i => {
        this.clickHandler(i);
      },
      x: this.props.boardSize.x,
      y: this.props.boardSize.x,
      connectionsArray: this.state.connectionsArray,
      currentPlayer: this.state.currentPlayer,
      playerOne: this.props.playerOne,
      playerTwo: this.props.playerTwo,
      squaresArray: this.state.squaresArray,
      gameOver: this.state.gameOver,
      triggerGameRestart: () => {
        this.triggerGameRestart();
      }
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (GameInstance);

/***/ }),

/***/ "./components/Game/Square.js":
/*!***********************************!*\
  !*** ./components/Game/Square.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_lineto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-lineto */ "react-lineto");
/* harmony import */ var react_lineto__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_lineto__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class Square extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    let connectorA = `connector${this.props.connectorA}`,
        connectorB = `connector${this.props.connectorB}`,
        connectorC = `connector${this.props.connectorC}`,
        connectorD = `connector${this.props.connectorD}`;
    return __jsx("div", null, __jsx(react_lineto__WEBPACK_IMPORTED_MODULE_1___default.a, {
      from: connectorA,
      to: connectorB,
      borderColor: this.props.color,
      borderWidth: 3
    }), __jsx(react_lineto__WEBPACK_IMPORTED_MODULE_1___default.a, {
      from: connectorC,
      to: connectorD,
      borderColor: this.props.color,
      borderWidth: 3
    }), __jsx(react_lineto__WEBPACK_IMPORTED_MODULE_1___default.a, {
      from: connectorA,
      to: connectorC,
      borderColor: this.props.color,
      borderWidth: 3
    }), __jsx(react_lineto__WEBPACK_IMPORTED_MODULE_1___default.a, {
      from: connectorA,
      to: connectorD,
      borderColor: this.props.color,
      borderWidth: 3
    }), __jsx(react_lineto__WEBPACK_IMPORTED_MODULE_1___default.a, {
      from: connectorD,
      to: connectorB,
      borderColor: this.props.color,
      borderWidth: 3
    }), __jsx(react_lineto__WEBPACK_IMPORTED_MODULE_1___default.a, {
      from: connectorC,
      to: connectorB,
      borderColor: this.props.color,
      borderWidth: 3
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Square);

/***/ }),

/***/ "./components/Game/SquareConnections.js":
/*!**********************************************!*\
  !*** ./components/Game/SquareConnections.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Square_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Square.js */ "./components/Game/Square.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class SquareConnections extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  renderSquares() {
    let tempArray = [];

    for (let i = 0; i < this.props.squaresArray.length; i++) {
      tempArray.push(i);
    }

    return __jsx("div", null, tempArray.map(i => {
      return __jsx(_Square_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
        color: this.props.squaresArray[i]['color'],
        connectorA: this.props.squaresArray[i]['square'][0][0],
        connectorB: this.props.squaresArray[i]['square'][1][1],
        connectorC: this.props.squaresArray[i]['square'][0][1],
        connectorD: this.props.squaresArray[i]['square'][1][0]
      });
    }));
  }

  render() {
    return __jsx("div", null, this.renderSquares());
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SquareConnections);

/***/ }),

/***/ "./components/Game/index.js":
/*!**********************************!*\
  !*** ./components/Game/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _GameInstance_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GameInstance.js */ "./components/Game/GameInstance.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class Game extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerOne: this.props.playerOne,
      playerTwo: this.props.playerTwo,
      self: this.props.self,
      boardSize: this.props.boardSize
    };
  }

  render() {
    return __jsx(_GameInstance_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
      socket: this.props.socket,
      gameID: this.props.gameID,
      self: this.state.self,
      playerOne: this.state.playerOne,
      playerTwo: this.state.playerTwo,
      boardSize: this.state.boardSize
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Game);

/***/ }),

/***/ "./components/Lobby/ActiveUsers.js":
/*!*****************************************!*\
  !*** ./components/Lobby/ActiveUsers.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Game_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Game/index.js */ "./components/Game/index.js");



var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



class ActiveUsers extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      gameLink: false,
      self: {},
      playerOne: {},
      playerTwo: {},
      boardSize: {}
    };
    this.inviteFunction = this.inviteFunction.bind(this);
    this.message = this.message.bind(this);
  }

  message(event) {
    let data = JSON.parse(event.data);

    if (data.type == 'users') {
      this.setState({
        users: data.users
      });
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
    this.setState({
      self: this.props.self
    });
    this.props.socket.addEventListener('message', this.message, true);
    this.props.socket.send(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()({
      type: "get-users"
    }));
  }

  componentWillUnmount() {
    this.props.socket.removeEventListener('message', this.message, true);
    this.props.socket.close();
  }

  inviteFunction(data) {
    let target = {
      userID: data.currentTarget.dataset.userid
    },
        self = this.state.self;

    if (target.userID == self.userID) {
      alert("you can't play yourself!");
      return;
    }

    ;

    if (this.state.gameLink) {
      alert("you can't play while in game!");
      return;
    }

    ;

    if (this.state.users[target.userID].inGame) {
      alert("you can't play someone who's in a game!");
      return;
    } else {
      let xDone = false,
          yDone = false;
      let x = prompt("Board width?");

      function checkX() {
        if (x == null) {
          return false;
        }

        ;

        if (!/^[0-9]+$/.test(x)) {
          //could have used isNaN()
          x = prompt("Please only input numbers");
          checkX();
        }

        ;

        if (x < 2) {
          x = prompt("Please only input numbers greater than 1");
          checkX();
        }

        ;

        if (/^[0-9]+$/.test(x) && x > 1) {
          xDone = true;
        }

        ;
      }

      ;
      checkX();
      let y = prompt("Board height?");

      function checkY() {
        if (y == null) {
          return false;
        }

        ;

        if (!/^[0-9]+$/.test(y)) {
          y = prompt("Please only input numbers");
          checkY();
        }

        ;

        if (y < 2) {
          y = prompt("Please only input numbers greater than 1");
          checkY();
        }

        ;

        if (/^[0-9]+$/.test(y) && y > 1) {
          yDone = true;
        }

        ;
      }

      ;
      checkY();

      if (xDone && yDone) {
        axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('/game_daemon', {
          playerOne: {
            userID: self.userID
          },
          playerTwo: target,
          boardSize: {
            x: x,
            y: y
          }
        });
      }

      ;
    }
  }

  render() {
    let users = this.state.users;

    let usersIter = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(this.state.users);

    let gameLink = this.state.gameLink;
    return __jsx("div", null, __jsx("div", null, !!gameLink && __jsx(_Game_index_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
      self: this.state.self,
      playerOne: this.state.playerOne,
      playerTwo: this.state.playerTwo,
      boardSize: this.state.boardSize,
      gameID: this.state.gameID,
      socket: this.props.socket
    })), __jsx("div", null, usersIter.map((user, index) => __jsx("div", {
      key: index
    }, __jsx("a", {
      href: "#",
      onClick: this.inviteFunction,
      "data-userid": users[user].userID
    }, __jsx(User, {
      user: users[user].name
    }))))));
  }

}

;

class User extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  render() {
    return __jsx("div", null, this.props.user);
  }

}

;
/* harmony default export */ __webpack_exports__["default"] = (ActiveUsers);

/***/ }),

/***/ "./components/Lobby/Chat.js":
/*!**********************************!*\
  !*** ./components/Lobby/Chat.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

class Chat extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "handleKeyUp", evt => {
      const value = evt.target.value;

      if (evt.keyCode === 13 && !evt.shiftKey) {
        const chat = {
          type: "message",
          userID: this.props.self.userID,
          message: value
        };
        evt.target.value = '';
        this.props.socket.send(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(chat));
      }
    });

    this.state = {
      messages: []
    };
    this.message = this.message.bind(this);
  }

  message(event) {
    let that = this;
    let data = JSON.parse(event.data);

    if (data.type == "message") {
      const messages = that.state.messages;
      messages.push(data);
      that.setState({
        messages: messages
      }, () => {
        document.getElementById("chat-box").scrollTop = document.getElementById("chat-box").scrollHeight;
      });
    }

    if (data.type == "history") {
      const messages = that.state.messages;

      for (let message in data.history) {
        messages.push(data.history[message]);
      }

      that.setState({
        messages: messages
      }, () => {
        document.getElementById("chat-box").scrollTop = document.getElementById("chat-box").scrollHeight;
      });
    }
  }

  componentDidMount() {
    let socket = this.props.socket;
    socket.addEventListener('message', this.message, true);
    socket.send(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()({
      type: "get-chat-history"
    }));
  }

  componentWillUnmount() {
    this.props.socket.removeEventListener('message', this.message, true);
  }

  render() {
    return __jsx("div", null, __jsx("div", null, __jsx("h2", null, "Welcome ", this.props.self.name, "!")), __jsx("div", {
      className: "chat-box",
      id: "chat-box"
    }, __jsx(MessageHistory, {
      messages: this.state.messages
    })), __jsx("div", null, __jsx("textarea", {
      onKeyUp: this.handleKeyUp,
      placeholder: "Enter a chat message"
    })));
  }

}

class MessageHistory extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  render() {
    return __jsx("div", null, this.props.messages.map((message, index) => {
      return __jsx("div", {
        key: index
      }, (index == 0 || message.userID != this.props.messages[index - 1].userID) && __jsx("u", null, __jsx("b", null, __jsx("big", null, message.name))), __jsx(ChatMessage, {
        message: message.message,
        color: message.color
      }));
    }));
  }

}

class ChatMessage extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  render() {
    return __jsx("div", {
      style: {
        color: `${this.props.color}`
      }
    }, this.props.message);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Chat);

/***/ }),

/***/ "./components/Lobby/index.js":
/*!***********************************!*\
  !*** ./components/Lobby/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Chat_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Chat.js */ "./components/Lobby/Chat.js");
/* harmony import */ var _ActiveUsers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ActiveUsers.js */ "./components/Lobby/ActiveUsers.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_4__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


 //import Socket from '../Socket/index';

const Socket = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(() => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../Socket/index.js */ "./components/Socket/index.js")), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ../Socket/index.js */ "./components/Socket/index.js")],
    modules: ["../Socket/index.js"]
  }
});

class InfoTaker extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      color: '',
      userID: '',
      socket: null,
      submitted: false,
      connected: false,
      pgp: null
    };
    this.setInfo = this.setInfo.bind(this);
    this.setConnection = this.setConnection.bind(this);
    this.setPGP = this.setPGP.bind(this);
  }

  setInfo(userID, name, color, submitted) {
    this.setState({
      name: name,
      color: color,
      userID: userID,
      submitted: submitted
    });
  }

  setConnection(socket) {
    if (socket) {
      this.setState({
        socket: socket,
        connected: true
      });
    }

    ;
  }

  setPGP(pgp) {
    if (pgp) {
      this.setState({
        pgp: pgp
      });
    }

    ;
  }

  render() {
    if (this.state.submitted == false && this.state.connected == false) {
      return __jsx("div", null, __jsx(Socket, {
        setConnection: this.setConnection,
        setPGP: this.setPGP,
        pgp: this.state.pgp
      }));
    }

    if (this.state.submitted == false && this.state.connected == true) {
      return __jsx("div", null, __jsx("div", {
        className: "info-taker"
      }, __jsx(Taker, {
        setInfo: this.setInfo,
        socket: this.state.socket
      })));
    } else if (this.state.submitted == true && this.state.connected == true) {
      let self = {
        userID: this.state.userID,
        name: this.state.name,
        color: this.state.color
      };
      return __jsx("div", null, __jsx("div", {
        className: "lobby"
      }, __jsx("div", null, __jsx(_Chat_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
        self: self,
        socket: this.state.socket
      })), __jsx("div", {
        className: "active-users"
      }, __jsx(_ActiveUsers_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
        self: self,
        socket: this.state.socket
      }))));
    }
  }

}

class Taker extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.connect = this.connect.bind(this);
  }

  connect(name, color, submitted) {
    let that = this,
        socket = that.props.socket;
    socket.addEventListener('message', function (event) {
      let data = JSON.parse(event.data);

      if (data.type == "identified") {
        console.log("identified:" + data.userID);
        that.props.setInfo(data.userID, name, color, submitted);
      }
    }, {
      once: true
    });
    socket.send(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()({
      type: "identification",
      name: name,
      color: color
    }));
  }

  handleSubmit(event) {
    event.preventDefault();

    function checkName(name) {
      if (/\s/.test(name)) {
        alert("No whitespace in the name, please");
        return false;
      } else if (/\W/.test(name)) {
        alert("No special characters, please. (Except underscore. We like underscore.)");
        return false;
      } else if (/\w/.test(name)) {
        return true;
      }
    }

    function checkColor(color) {
      if (/^#{1}[0123456789abcdef]{6}/.test(color)) {
        return true;
      } else {
        return false;
      }
    }

    if (checkName(event.target.elements.namedItem("name").value) && checkColor(event.target.elements.namedItem("color").value)) {
      let name = event.target.elements.namedItem("name").value,
          color = event.target.elements.namedItem("color").value,
          submitted = true;
      this.connect(name, color, submitted);
    } else {
      return;
    }
  }

  render() {
    return __jsx("form", {
      onSubmit: this.handleSubmit
    }, __jsx("label", null, "Please enter your name and choose a color!", __jsx("br", null), __jsx("input", {
      type: "text",
      name: "name"
    })), __jsx("label", null, __jsx("input", {
      type: "color",
      name: "color"
    })), __jsx("br", null), __jsx("input", {
      type: "submit",
      value: "Submit"
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (InfoTaker);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/json/stringify.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/define-property.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/keys.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/parse-int.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-int */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/parse-int.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/json/stringify.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/json/stringify.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ../../modules/_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js");
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/define-property.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/define-property.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.define-property */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.define-property.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/keys.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/keys.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.keys */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.keys.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js").Object.keys;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/parse-int.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/parse-int.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/es6.parse-int */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.parse-int.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js").parseInt;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_a-function.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_a-function.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-includes.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-includes.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_cof.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_cof.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.9' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ctx.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ctx.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_defined.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_defined.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_dom-create.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_dom-create.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_enum-bug-keys.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_enum-bug-keys.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ctx.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iobject.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iobject.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_library.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_library.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys-internal.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys-internal.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-sap.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-sap.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_parse-int.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_parse-int.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $parseInt = __webpack_require__(/*! ./_global */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js").parseInt;
var $trim = __webpack_require__(/*! ./_string-trim */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_string-trim.js").trim;
var ws = __webpack_require__(/*! ./_string-ws */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_string-ws.js");
var hex = /^[-+]?0[xX]/;

module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {
  var string = $trim(String(str), 3);
  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
} : $parseInt;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_property-desc.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_property-desc.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared-key.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared-key.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_string-trim.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_string-trim.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_defined.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js");
var spaces = __webpack_require__(/*! ./_string-ws */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_string-ws.js");
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_string-ws.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_string-ws.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-absolute-index.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-absolute-index.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-integer.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-integer.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-iobject.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-iobject.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-length.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-length.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-object.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-object.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-primitive.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-primitive.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_uid.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_uid.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.define-property.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.define-property.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js"), 'Object', { defineProperty: __webpack_require__(/*! ./_object-dp */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js").f });


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.keys.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.keys.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-object.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-sap.js")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.parse-int.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.parse-int.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");
var $parseInt = __webpack_require__(/*! ./_parse-int */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_parse-int.js");
// 18.2.5 parseInt(string, radix)
$export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/style.css */ "./pages/style.css");
/* harmony import */ var _pages_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_pages_style_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Lobby_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Lobby/index.js */ "./components/Lobby/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class Index extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return __jsx("div", null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, null, __jsx("title", null, "La Pipoette")), __jsx("div", null, __jsx(_components_Lobby_index_js__WEBPACK_IMPORTED_MODULE_2__["default"], null)));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./pages/style.css":
/*!*************************!*\
  !*** ./pages/style.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/jbarreto/Documents/Projects/Le Pipoette/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-lineto":
/*!*******************************!*\
  !*** external "react-lineto" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-lineto");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map
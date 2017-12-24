'use strict'

// test if JS is working
console.log('hello world')

// starting empty game board
const gameBoard = ['', '', '', '', '', '', '', '', '']
// console.log('Original Game Board:', gameBoard)

// Define auxiliary Variables
let turnNumber = 1
let turnPlayer = ''
let over = false

const changePlayer = function () {
  if (turnNumber === 1 || turnNumber === 3 || turnNumber === 5 || turnNumber === 7 || turnNumber === 9) {
    turnPlayer = 'player_X'
  }
  if (turnNumber === 2 || turnNumber === 4 || turnNumber === 6 || turnNumber === 8) {
    turnPlayer = 'player_0'
  }
  // return turnPlayer
}

changePlayer()

const turnChanger = function () {
  // debugger
  turnNumber++
  changePlayer()
  console.log('this worked?')
  // return turnPlayer
}

// Check for all winning combinations (only 8)
const checkForWin = function () {
  if
  ((gameBoard[0] === 'X' && gameBoard[1] === 'X' && gameBoard[2] === 'X') ||
  (gameBoard[0] === '0' && gameBoard[1] === '0' && gameBoard[2] === '0') ||

  (gameBoard[3] === 'X' && gameBoard[4] === 'X' && gameBoard[5] === 'X') ||
  (gameBoard[3] === '0' && gameBoard[4] === '0' && gameBoard[5] === '0') ||

  (gameBoard[6] === 'X' && gameBoard[7] === 'X' && gameBoard[8] === 'X') ||
  (gameBoard[6] === '0' && gameBoard[7] === '0' && gameBoard[8] === '0') ||

  (gameBoard[0] === 'X' && gameBoard[3] === 'X' && gameBoard[6] === 'X') ||
  (gameBoard[0] === '0' && gameBoard[3] === '0' && gameBoard[6] === '0') ||

  (gameBoard[1] === 'X' && gameBoard[4] === 'X' && gameBoard[7] === 'X') ||
  (gameBoard[1] === '0' && gameBoard[4] === '0' && gameBoard[7] === '0') ||

  (gameBoard[2] === 'X' && gameBoard[5] === 'X' && gameBoard[8] === 'X') ||
  (gameBoard[2] === '0' && gameBoard[5] === '0' && gameBoard[8] === '0') ||

  (gameBoard[0] === 'X' && gameBoard[4] === 'X' && gameBoard[8] === 'X') ||
  (gameBoard[0] === '0' && gameBoard[4] === '0' && gameBoard[8] === '0') ||

  (gameBoard[2] === 'X' && gameBoard[4] === 'X' && gameBoard[6] === 'X') ||
  (gameBoard[2] === '0' && gameBoard[4] === '0' && gameBoard[6] === '0')) {
    console.log('You have won!')
    over = true
    turnNumber = null
  }
}

// function to add a marker to the game board
const addMarker = function (boardIndex, playerSymbol) {
  console.log('The current turn is Turn Number #', turnNumber)
  console.log(`It is currently ${turnPlayer}'s turn.'`)
  if ((playerSymbol === 'X' || playerSymbol === '0') && (boardIndex >= 0 && boardIndex < 9) && (gameBoard[boardIndex] === '')) {
    // change the array element to the player's symbol
    console.log(`You selected marker ${playerSymbol} to be placed at index: ${boardIndex}.`)
    gameBoard[boardIndex] = playerSymbol
    console.log('Your game board is now:', gameBoard)
    // add turn number incrementer here to only add if a valid move
    turnChanger()
    console.log('inside addMarker after turnChanger(), turnNumber is:', turnNumber)
    console.log(`inside addMarker after turnChanger(), It is currently ${turnPlayer}'s turn.'`)
    checkForWin()
  } else if (boardIndex >= 9) {
    // if an index parameter is greater than the size of the board array
    console.log(`Invalid space selection. You selected ${boardIndex}, but you cannot choose an index higher than 8. There are no more spaces after that!`)
    console.log('The current game board is:', gameBoard)
  } else if (gameBoard[boardIndex] !== '') {
    // if the index parameter passed in is NOT an empty string, ie has something inside already
    console.log(`Invalid space selection. You selected ${boardIndex}, but there is already a marker placed there.`)
    console.log('The current game board is:', gameBoard)
  } else if (playerSymbol !== 'X' || playerSymbol !== '0') {
    console.log(`Invalid symbol selection. You selected ${playerSymbol}, but you are restricted to only X or 0.`)
    console.log('The current game board is:', gameBoard)
  } else {
    console.log(`Need Valid Input! You cannot use ${playerSymbol} on space ${boardIndex}`)
    console.log('The current game board is:', gameBoard)
  }
  // return turnChanger
  console.log('right before I leave addMarker, the turnPlayer is:', turnPlayer)
  return turnPlayer
}

// // Test addMarker function
// addMarker(0, 'X')
// addMarker(0, '0')
// addMarker(2, 'O')
// addMarker(12, '3')
// addMarker(2, '0')
// addMarker(7, 'thirteen')

// Add a marker wherever Player X Chooses
const playerXTurn = function (boardIndex) {
  addMarker(boardIndex, 'X')
  // turnChanger()
}

// Add a marker wherever Player 0 Chooses
const player0Turn = function (boardIndex) {
  addMarker(boardIndex, '0')
}

// restart 'over' state when game is over
// reset turnNumber back to 1 once the game is finished
if (over === true) {
  turnNumber = 1
  over = false
}

const placeMarker = function () {
  // console.log('at the beginning of placeMarker, turnPlayer is:', turnPlayer)
  if (turnPlayer === 'player_X') {
    $(this).text('X')
    $(this).css('background', '#aaa')
    // console.log('this is:', this)
    const index = this.dataset.cellIndex
    console.log('cellIndex is:', index)
    addMarker(index, 'X')
    console.log('Inside placeMarker, turnPlayer is:', turnPlayer)
  } else if (turnPlayer === 'player_0') {
    $(this).text('0')
    $(this).css('background', '#aaa')
    const index = this.dataset.cellIndex
    addMarker(index, '0')
  }
}

module.exports = {
  gameBoard,
  turnNumber,
  turnPlayer,
  turnChanger,
  addMarker,
  checkForWin,
  playerXTurn,
  player0Turn,
  placeMarker,
  over
}

// // Turn logic
// if (turnNumber === 1) {
//   // it is player_x turn
//   turnPlayer = 'Player X'
//   // addMarker based on player's input
//   console.log(`It is currently turn number: ${turnNumber}. It is ${turnPlayer}'s turn.'`)
//   playerXTurn(0)
// }
// if (turnNumber === 2) {
//   // it is player_0 turn
//   turnPlayer = 'Player 0'
//   // addMarker based on player's input
//   console.log(`It is currently turn number: ${turnNumber}. It is ${turnPlayer}'s turn.'`)
//   player0Turn(6)
// }
// if (turnNumber === 3) {
//   // it is player_x turn
//   turnPlayer = 'Player X'
//   // addMarker based on player's input
//   console.log(`It is currently turn number: ${turnNumber}. It is ${turnPlayer}'s turn.'`)
//   playerXTurn(1)
// }
// if (turnNumber === 4) {
//   // it is player_0 turn
//   turnPlayer = 'Player 0'
//   // addMarker based on player's input
//   console.log(`It is currently turn number: ${turnNumber}. It is ${turnPlayer}'s turn.'`)
//   player0Turn(7)
// }
// if (turnNumber === 5) {
//   // it is player_x turn
//   turnPlayer = 'Player X'
//   // addMarker based on player's input
//   console.log(`It is currently turn number: ${turnNumber}. It is ${turnPlayer}'s turn.'`)
//   playerXTurn(5)
//   checkForWin()
// }
// if (turnNumber === 6) {
//   // it is player_0 turn
//   turnPlayer = 'Player 0'
//   // addMarker based on player's input
//   console.log(`It is currently turn number: ${turnNumber}. It is ${turnPlayer}'s turn.'`)
//   player0Turn(4)
//   checkForWin()
// }
// if (turnNumber === 7) {
//   // it is player_x turn
//   turnPlayer = 'Player X'
//   // addMarker based on player's input
//   console.log(`It is currently turn number: ${turnNumber}. It is ${turnPlayer}'s turn.'`)
//   playerXTurn(2)
//   checkForWin()
// }
// if (turnNumber === 8) {
//   // it is player_0 turn
//   turnPlayer = 'Player 0'
//   // addMarker based on player's input
//   console.log(`It is currently turn number: ${turnNumber}. It is ${turnPlayer}'s turn.'`)
//   checkForWin()
// }
// if (turnNumber === 9) {
//   // it is player_x turn
//   turnPlayer = 'Player X'
//   // addMarker based on player's input
//   console.log(`It is currently turn number: ${turnNumber}. It is ${turnPlayer}'s turn.'`)
//   checkForWin()
// }
//
// console.log('turnNumber is:', turnNumber)
// console.log('over is:', over)

//
// console.log('is the game still over?', over)
// console.log('turn number is now:', turnNumber)

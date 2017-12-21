// test if JS is working
console.log('hello world')

// starting empty game board
const gameBoard = ['', '', '', '', '', '', '', '', '']
// console.log('Original Game Board:', gameBoard)

// function to add a marker to the game board
const addMarker = function (boardIndex, playerSymbol) {
  if ((playerSymbol === 'X' || playerSymbol === '0') && (boardIndex >= 0 && boardIndex < 9) && (gameBoard[boardIndex] === '')) {
    // change the array element to the player's symbol
    gameBoard[boardIndex] = playerSymbol
    // add turn number incrementer here to only add if a valid move
    turnNumber++
    console.log(`You selected marker ${playerSymbol} to be placed at index: ${boardIndex}.`)
    console.log('Your game board is now:', gameBoard)
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
}

// // Test addMarker function
// addMarker(0, 'X')
// addMarker(0, '0')
// addMarker(2, 'O')
// addMarker(12, '3')
// addMarker(2, '0')
// addMarker(7, 'thirteen')

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

// Add a marker wherever Player X Chooses
const playerXTurn = function (boardIndex) {
  addMarker(boardIndex, 'X')
}

// Add a marker wherever Player 0 Chooses
const player0Turn = function (boardIndex) {
  addMarker(boardIndex, '0')
}

// Define auxiliary Variables
let turnNumber = 1
let turnPlayer = ''
let over = false

// Turn logic
if (turnNumber === 1) {
  // it is player_x turn
  turnPlayer = 'Player X'
  // addMarker based on player's input
  console.log(`It is currently turn number: ${turnNumber}. It is ${turnPlayer}'s turn.'`)
  playerXTurn(0)
}
if (turnNumber === 2) {
  // it is player_0 turn
  turnPlayer = 'Player 0'
  // addMarker based on player's input
  console.log(`It is currently turn number: ${turnNumber}. It is ${turnPlayer}'s turn.'`)
  player0Turn(6)
  // BELOW IS OBSOLETE -- Added turn number incrementer to addMarker function
  // if the player makes a valid move, increment the turn number
  // otherwise, log that the player needs to pick a move!
  // if (player0Turn() === true) {
  //   turnNumber++
  // } else {
  //   console.log('Player 0 needs to pick a move!')
  // }
}
if (turnNumber === 3) {
  // it is player_x turn
  turnPlayer = 'Player X'
  // addMarker based on player's input
  console.log(`It is currently turn number: ${turnNumber}. It is ${turnPlayer}'s turn.'`)
  playerXTurn(1)
  // BELOW IS OBSOLETE -- Added turn number incrementer to addMarker function
  // if (playerXTurn() === true) {
  //   turnNumber++
  // } else {
  //   console.log('Player X needs to pick a move!')
  // }
}
if (turnNumber === 4) {
  // it is player_0 turn
  turnPlayer = 'Player 0'
  // addMarker based on player's input
  console.log(`It is currently turn number: ${turnNumber}. It is ${turnPlayer}'s turn.'`)
  player0Turn(7)
  // BELOW IS OBSOLETE -- Added turn number incrementer to addMarker function
  // if (player0Turn() === true) {
  //   turnNumber++
  // } else {
  //   console.log('Player 0 needs to pick a move!')
  // }
}
if (turnNumber === 5) {
  // it is player_x turn
  turnPlayer = 'Player X'
  // addMarker based on player's input
  console.log(`It is currently turn number: ${turnNumber}. It is ${turnPlayer}'s turn.'`)
  playerXTurn(5)
  checkForWin()
  // BELOW IS OBSOLETE -- Added turn number incrementer to addMarker function
  // if (over === false && playerXTurn === true) {
  //   turnNumber++
  // } else {
  //   console.log('Player X needs to pick a move!')
  // }
}
if (turnNumber === 6) {
  // it is player_0 turn
  turnPlayer = 'Player 0'
  // addMarker based on player's input
  console.log(`It is currently turn number: ${turnNumber}. It is ${turnPlayer}'s turn.'`)
  player0Turn(4)
  checkForWin()
  // BELOW IS OBSOLETE -- Added turn number incrementer to addMarker function
  // if (over === false && player0Turn === true) {
  //   turnNumber++
  // } else {
  //   console.log('Player 0 needs to pick a move!')
  // }
}
if (turnNumber === 7) {
  // it is player_x turn
  turnPlayer = 'Player X'
  // addMarker based on player's input
  console.log(`It is currently turn number: ${turnNumber}. It is ${turnPlayer}'s turn.'`)
  playerXTurn(2)
  checkForWin()
  // BELOW IS OBSOLETE -- Added turn number incrementer to addMarker function
  // if (over === false && playerXTurn === true) {
  //   turnNumber++
  // } else {
  //   console.log('Player X needs to pick a move!')
  // }
}
if (turnNumber === 8) {
  // it is player_0 turn
  turnPlayer = 'Player 0'
  // addMarker based on player's input
  console.log(`It is currently turn number: ${turnNumber}. It is ${turnPlayer}'s turn.'`)
  checkForWin()
  // BELOW IS OBSOLETE -- Added turn number incrementer to addMarker function
  // if (over === false && player0Turn === true) {
  //   turnNumber++
  // } else {
  //   console.log('Player 0 needs to pick a move!')
  // }
}
if (turnNumber === 9) {
  // it is player_x turn
  turnPlayer = 'Player X'
  // addMarker based on player's input
  console.log(`It is currently turn number: ${turnNumber}. It is ${turnPlayer}'s turn.'`)
  checkForWin()
}

console.log('turnNumber is:', turnNumber)
console.log('over is:', over)

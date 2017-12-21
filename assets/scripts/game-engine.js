console.log('hello world')

const gameBoard = ['', '', '', '', '', '', '', '', '']

console.log('Original Game Board:', gameBoard)

const addMarker = function (boardIndex, playerSymbol) {
  if ((playerSymbol === 'X' || playerSymbol === '0') && (boardIndex >= 0 && boardIndex < 9) && (gameBoard[boardIndex] === '')) {
    gameBoard[boardIndex] = playerSymbol
    console.log(`You selected marker ${playerSymbol} to be placed at index: ${boardIndex}.`)
    console.log('Your game board is now:', gameBoard)
  } else if (boardIndex >= 9) {
    console.log(`Invalid space selection. You selected ${boardIndex}, but you cannot choose an index higher than 8. There are no more spaces after that!`)
    console.log('The current game board is:', gameBoard)
  } else if (gameBoard[boardIndex] !== '') {
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

// // Test
// addMarker(0, 'X')
// addMarker(0, '0')
// addMarker(2, 'O')
// addMarker(12, '3')
// addMarker(2, '0')
// addMarker(7, 'thirteen')

const playerXTurn = function (boardIndex) {
  addMarker(boardIndex, 'X')
}

const player0Turn = function (boardIndex) {
  addMarker(boardIndex, '0')
}

let playerTurn = 1

if (playerTurn === 1) {
  // it is player_x turn
  // addMarker based on player's input
  playerXTurn(0)
  playerTurn++
}
if (playerTurn === 2) {
  // it is player_0 turn
  // addMarker based on player's input
  player0Turn(6)
  playerTurn++
}
if (playerTurn === 3) {
  // it is player_x turn
  // addMarker based on player's input
  playerXTurn(1)
  playerTurn++
}
if (playerTurn === 4) {
  // it is player_0 turn
  // addMarker based on player's input
  player0Turn(7)
  playerTurn++
}
if (playerTurn === 5) {
  // it is player_x turn
  // addMarker based on player's input
  playerXTurn(2)
  playerTurn++
}
if (playerTurn === 6) {
  // it is player_0 turn
  // addMarker based on player's input
  player0Turn(8)
  playerTurn++
}
if (playerTurn === 7) {
  // it is player_x turn
  // addMarker based on player's input
  playerTurn++
}
if (playerTurn === 8) {
  // it is player_0 turn
  // addMarker based on player's input
  playerTurn++
}
if (playerTurn === 9) {
  // it is player_x turn
  // addMarker based on player's input
  playerTurn++
}
console.log(playerTurn)

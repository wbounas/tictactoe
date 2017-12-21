console.log('hello world')

const gameBoard = ["","","","","","","","",""]

console.log(gameBoard)

const addMarker = function (boardIndex, playerSymbol) {
  if ((playerSymbol === 'X' || playerSymbol === '0') && (boardIndex >= 0 && boardIndex < 9) && (gameBoard[boardIndex] === "")) {
    gameBoard[boardIndex] = playerSymbol
    console.log(`You selected marker ${playerSymbol} to be placed at index: ${boardIndex}.`)
    console.log('Your game board is now:', gameBoard)
  } else if (boardIndex >= 9) {
    console.log(`Invalid space selection. You selected ${boardIndex}, but you cannot choose an index higher than 8. There are no more spaces after that!`)
    console.log('The current game board is:', gameBoard)
  } else if (gameBoard[boardIndex] !== "") {
    console.log(`Invalid space seelection. You selected ${boardIndex}, but there is already a marker placed there.`)
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

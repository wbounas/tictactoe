'use strict'

// test if JS is working
console.log('hello world')

// create game object
const game = {
  'id': 3,
  'cells': ['', '', '', '', '', '', '', '', ''],
  'over': false,
  'winner': undefined,
  'draw': false,
  'player_x': {
    'id': 1,
    'email': 'and@and.com'
  },
  'player_o': null,
  '_self': this,
  'isCellEmpty': function (cellIndexNumber) {
    return this.cells[cellIndexNumber] === ''
    // if (this.cells[cellIndexNumber] === '') {
    //   return true
    // } else {
    //   return false
    // }
  },
  'whoseTurn': function () {
    let numOfX = 0
    let numOfO = 0
    for (let i = 0; i < this.cells.length; i++) {
      if (this.cells[i] === 'x') {
        ++numOfX
      } else if (this.cells[i] === 'o') {
        ++numOfO
      }
    }
    if (numOfX === numOfO) {
      return 'x'
    } else {
      return 'o'
    }
  },
  'setMarker': function (cellIndexNumber) {
    if (cellIndexNumber >= 0 && cellIndexNumber < 9 && this.isCellEmpty(cellIndexNumber)) {
      this.cells[cellIndexNumber] = this.whoseTurn()
      return this.whoseTurn()
    } else {
      return 'Not a valid move! Please try again.'
    }
  },
  'whoWon': function () {
    // const cells = ['x', 'x', 'x', 3, 4, 5, 6, 7, 8]
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
    const isWinningCombination = function (spot1, spot2, spot3) {
      // Why doesn't this.cells[spot1] work???
      // Is it because it is inside of a function that's inside of a method?
      // Because this.cells[spot1] returns undefined even when cells is defined inside of whoWon
      console.log('this is', this)
      if (game.cells[spot1] + game.cells[spot2] + game.cells[spot3] === 'xxx') {
        return true
      } else if (game.cells[spot1] + game.cells[spot2] + game.cells[spot3] === 'ooo') {
        return true
      } else {
        return false
      }
    }
    for (let i = 0; i < winningCombinations.length; i++) {
      const winningCombination = winningCombinations[i]
      if (isWinningCombination(winningCombination[0], winningCombination[1], winningCombination[2])) {
        const firstWinningSpot = winningCombination[0]
        const winner = game.cells[firstWinningSpot]
        return winner
      }
    }
    // return -1
  },
  'setGameStatus': function () {
    this.winner = this.whoWon()
    console.log('winner is:', this.winner)
    const cellEmpty = function (cell) {
      return cell === ''
    }
    if (this.winner !== undefined) {
      this.over = true
    } else if (!this.cells.some(cellEmpty) && this.winner === undefined) {
      this.draw = true
      this.over = true
    } else {
      this.over = false
    }
    // this.over = !this.cells.some(function (cell) {
    //   return cell === ''
    // })
  },
  'displayGameStatus': function () {
    if (this.whoWon() === 'x') {
      return 'X has won'
    } else if (this.whoWon() === 'o') {
      return 'O has won'
    } else if (this.draw) {
      return 'Draw'
    }
  }
}

const playerStats = {
  'stats': {
    wins: 0,
    draws: 0,
    loses: 0
  },
  'getStats': function (pastGame) {
    const isCellEmpty = function (cellIndexNumber) {
      for (let i = 0; i < pastGame.cells.length; i++) {
        if (pastGame.cells[i] === '') {
          return true
        }
      }
    }
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
    const isWinningCombination = function (spot1, spot2, spot3) {
      // Why doesn't this.cells[spot1] work???
      // Is it because it is inside of a function that's inside of a method?
      // Because this.cells[spot1] returns undefined even when cells is defined inside of whoWon
      // console.log('this is', this)
      if (pastGame.cells[spot1] + pastGame.cells[spot2] + pastGame.cells[spot3] === 'xxx') {
        return 'x'
      } else if (pastGame.cells[spot1] + pastGame.cells[spot2] + pastGame.cells[spot3] === 'ooo') {
        return 'o'
      } else {
        return false
      }
    }
    for (let i = 0; i < winningCombinations.length; i++) {
      // console.log('stats are:', this.stats)
      const winningCombination = winningCombinations[i]
      if (isWinningCombination(winningCombination[0], winningCombination[1], winningCombination[2]) === 'x') {
        playerStats.stats.wins++
      } else if (isWinningCombination(winningCombination[0], winningCombination[1], winningCombination[2]) === 'o') {
        playerStats.stats.loses++
      }
    }
    if (!pastGame.cells.every(isCellEmpty)) {
      playerStats.stats.draws++
    }
    // else if (!isWinningCombination(winningCombination[0], winningCombination[1], winningCombination[2])) {
    //   playerStats.stats.loses++
    // }
    console.log('stats are', playerStats.stats)
    return playerStats.stats
  }
}

module.exports = {
  game,
  playerStats
}

// // starting empty game board
// const gameBoard = ['', '', '', '', '', '', '', '', '']
// // console.log('Original Game Board:', gameBoard)

// Define auxiliary Variables
// let turnNumber = 1
// let turnPlayer = ''
// let over = false

// const changePlayer = function () {
//   if (turnNumber === 1 || turnNumber === 3 || turnNumber === 5 || turnNumber === 7 || turnNumber === 9) {
//     turnPlayer = 'player_X'
//   }
//   if (turnNumber === 2 || turnNumber === 4 || turnNumber === 6 || turnNumber === 8) {
//     turnPlayer = 'player_o'
//   }
//   // return turnPlayer
// }

// changePlayer()
//
// const turnChanger = function () {
//   // debugger
//   turnNumber++
//   changePlayer()
//   console.log('this worked?')
//   // return turnPlayer
// }

// Check for all winning combinations (only 8)
// const checkForWin = function () {
//   if
//   ((gameBoard[0] === 'x' && gameBoard[1] === 'x' && gameBoard[2] === 'x') ||
//   (gameBoard[0] === 'o' && gameBoard[1] === 'o' && gameBoard[2] === 'o') ||
//
//   (gameBoard[3] === 'x' && gameBoard[4] === 'x' && gameBoard[5] === 'x') ||
//   (gameBoard[3] === 'o' && gameBoard[4] === 'o' && gameBoard[5] === 'o') ||
//
//   (gameBoard[6] === 'x' && gameBoard[7] === 'x' && gameBoard[8] === 'x') ||
//   (gameBoard[6] === 'o' && gameBoard[7] === 'o' && gameBoard[8] === 'o') ||
//
//   (gameBoard[0] === 'x' && gameBoard[3] === 'x' && gameBoard[6] === 'x') ||
//   (gameBoard[0] === 'o' && gameBoard[3] === 'o' && gameBoard[6] === 'o') ||
//
//   (gameBoard[1] === 'x' && gameBoard[4] === 'x' && gameBoard[7] === 'x') ||
//   (gameBoard[1] === 'o' && gameBoard[4] === 'o' && gameBoard[7] === 'o') ||
//
//   (gameBoard[2] === 'x' && gameBoard[5] === 'x' && gameBoard[8] === 'x') ||
//   (gameBoard[2] === 'o' && gameBoard[5] === 'o' && gameBoard[8] === 'o') ||
//
//   (gameBoard[0] === 'x' && gameBoard[4] === 'x' && gameBoard[8] === 'x') ||
//   (gameBoard[0] === 'o' && gameBoard[4] === 'o' && gameBoard[8] === 'o') ||
//
//   (gameBoard[2] === 'x' && gameBoard[4] === 'x' && gameBoard[6] === 'x') ||
//   (gameBoard[2] === 'o' && gameBoard[4] === 'o' && gameBoard[6] === 'o')) {
//     console.log('You have won!')
//     over = true
//     turnNumber = null
//   }
// }

// function to add a marker to the game board
// const addMarker = function (boardIndex, playerSymbol) {
//   console.log('The current turn is Turn Number #', turnNumber)
//   console.log(`It is currently ${turnPlayer}'s turn.'`)
//   if ((playerSymbol === 'X' || playerSymbol === '0') && (boardIndex >= 0 && boardIndex < 9) && (gameBoard[boardIndex] === '')) {
//     // change the array element to the player's symbol
//     console.log(`You selected marker ${playerSymbol} to be placed at index: ${boardIndex}.`)
//     gameBoard[boardIndex] = playerSymbol
//     console.log('Your game board is now:', gameBoard)
//     // add turn number incrementer here to only add if a valid move
//     turnChanger()
//     console.log('inside addMarker after turnChanger(), turnNumber is:', turnNumber)
//     console.log(`inside addMarker after turnChanger(), It is currently ${turnPlayer}'s turn.'`)
//     checkForWin()
//   } else if (boardIndex >= 9) {
//     // if an index parameter is greater than the size of the board array
//     console.log(`Invalid space selection. You selected ${boardIndex}, but you cannot choose an index higher than 8. There are no more spaces after that!`)
//     console.log('The current game board is:', gameBoard)
//   } else if (gameBoard[boardIndex] !== '') {
//     // if the index parameter passed in is NOT an empty string, ie has something inside already
//     console.log(`Invalid space selection. You selected ${boardIndex}, but there is already a marker placed there.`)
//     console.log('The current game board is:', gameBoard)
//   } else if (playerSymbol !== 'X' || playerSymbol !== '0') {
//     console.log(`Invalid symbol selection. You selected ${playerSymbol}, but you are restricted to only X or 0.`)
//     console.log('The current game board is:', gameBoard)
//   } else {
//     console.log(`Need Valid Input! You cannot use ${playerSymbol} on space ${boardIndex}`)
//     console.log('The current game board is:', gameBoard)
//   }
//   // return turnChanger
//   console.log('right before I leave addMarker, the turnPlayer is:', turnPlayer)
//   return turnPlayer
// }

// const placeMarker = function () {
//   // console.log('at the beginning of placeMarker, turnPlayer is:', turnPlayer)
//   if (turnPlayer === 'player_X') {
//     $(this).text('X')
//     $(this).css('background', '#aaa')
//     // console.log('this is:', this)
//     const index = this.dataset.cellIndex
//     console.log('cellIndex is:', index)
//     addMarker(index, 'X')
//     console.log('Inside placeMarker, turnPlayer is:', turnPlayer)
//   } else if (turnPlayer === 'player_o') {
//     $(this).text('0')
//     $(this).css('background', '#aaa')
//     const index = this.dataset.cellIndex
//     addMarker(index, '0')
//   }
// }

// // Test addMarker function
// addMarker(0, 'X')
// addMarker(0, '0')
// addMarker(2, 'O')
// addMarker(12, '3')
// addMarker(2, '0')
// addMarker(7, 'thirteen')

// Add a marker wherever Player X Chooses
// const playerXTurn = function (boardIndex) {
//   addMarker(boardIndex, 'X')
//   // turnChanger()
// }

// Add a marker wherever Player 0 Chooses
// const player0Turn = function (boardIndex) {
//   addMarker(boardIndex, '0')
// }

// restart 'over' state when game is over
// reset turnNumber back to 1 once the game is finished
// if (over === true) {
//   turnNumber = 1
//   over = false
// }

// // Turn logic
// if (turnNumber === 1) {
//   // it is player_x turn
//   turnPlayer = 'Player X'
//   // addMarker based on player's input
//   console.log(`It is currently turn number: ${turnNumber}. It is ${turnPlayer}'s turn.'`)
//   playerXTurn(0)
// }
// if (turnNumber === 2) {
//   // it is player_o turn
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
//   // it is player_o turn
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
//   // it is player_o turn
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
//   // it is player_o turn
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

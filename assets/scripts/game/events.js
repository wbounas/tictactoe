'use strict'

const gameEngine = require('./game-engine')
// const gameBoard = gameEngine.gameBoard
// const addMarker = gameEngine.addMarker
// const playerXTurn = gameEngine.playerXTurn
// const player0Turn = gameEngine.player0Turn
// const turnChanger = gameEngine.turnChanger
// const placeMarker = gameEngine.placeMarker
// let turnNumber = gameEngine.turnNumber
// let turnPlayer = gameEngine.turnPlayer
// let over = gameEngine.over

// const mark_X = function () {
//   $(this).text('X')
//   $(this).css('background', '#aaa')
//   // console.log('this is:', this)
//   const index = this.dataset.cellIndex
//   playerXTurn(index)
//   // console.log(gameBoard)
//   // console.log('turn number is:', turnNumber)
// }

// const placeMarker = function () {
//   // console.log('at the beginning of placeMarker, turnPlayer is:', turnPlayer)
//   if (gameEngine.turnPlayer === 'player_X') {
//     $(this).text('X')
//     $(this).css('background', '#aaa')
//     // console.log('this is:', this)
//     const index = this.dataset.cellIndex
//     console.log('cellIndex is:', index)
//     playerXTurn(index)
//     console.log('Inside placeMarker, turnPlayer is:', gameEngine.turnPlayer)
//   } else if (gameEngine.turnPlayer === 'player_0') {
//     $(this).text('0')
//     $(this).css('background', '#aaa')
//     const index = this.dataset.cellIndex
//     player0Turn(index)
//   }
// }

const testHoverIn = function () {
  $(this).css('background', 'green')
  $(this).on('click', placeMarker)
}

const testHoverOut = function () {
  $(this).css('background', 'none')
}

const addHandlers = function () {
  $('#cell0').hover(testHoverIn, testHoverOut)
  $('#cell1').hover(testHoverIn, testHoverOut)
  $('#cell2').hover(testHoverIn, testHoverOut)
  $('#cell3').hover(testHoverIn, testHoverOut)
  $('#cell4').hover(testHoverIn, testHoverOut)
  $('#cell5').hover(testHoverIn, testHoverOut)
  $('#cell6').hover(testHoverIn, testHoverOut)
  $('#cell7').hover(testHoverIn, testHoverOut)
  $('#cell8').hover(testHoverIn, testHoverOut)
}

module.exports = {
  addHandlers
}

'use strict'

const gameEngine = require('./game-engine')
const store = require('../store')

const displayResult = function () {
  $('#result').html(gameEngine.game.displayGameStatus())
}

const displayTurn = function () {
  $('#current-turn').html(`It is now ${gameEngine.game.whoseTurn()}'s turn!'`)
  if (gameEngine.game.over === true && gameEngine.game.draw === false) {
    $('#current-turn').html(`The game is over! ${gameEngine.game.winner} has won!`)
  } else if (gameEngine.game.draw === true) {
    $('#current-turn').html(`The game has ended in a draw!`)
  }
}

// const displayInvalidMove = function () {
//   if () {
//
//   }
// }

module.exports = {
  displayResult,
  displayTurn
}

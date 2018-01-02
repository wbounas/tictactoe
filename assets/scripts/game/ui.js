'use strict'

const gameEngine = require('./game-engine')
const store = require('../store')

const displayResult = function () {
  $('#result').html(gameEngine.game.displayGameStatus())
}

const displayTurn = function () {
  if (gameEngine.game.over === true && gameEngine.game.draw === false) {
    $('#current-turn').html(`The game is over! ${gameEngine.game.winner} has won!`)
  } else if (gameEngine.game.draw === true) {
    $('#current-turn').html(`The game has ended in a draw!`)
  } else {
    $('#current-turn').html(`It is now ${gameEngine.game.whoseTurn()}'s turn!'`)
  }
}

// const displayInvalidMove = function () {
//   if () {
//
//   }
// }

const newGameSuccess = function (data) {
  console.log('Create Game Success! Data is:', data)
  console.log('Game ID is:', data.game.id)
}

const newGameFailure = function (error) {
  console.log('ERROR Occurred')
  console.error(error)
}

module.exports = {
  displayResult,
  displayTurn,
  newGameSuccess,
  newGameFailure
}

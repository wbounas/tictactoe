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
  clearGrid()
}

const newGameFailure = function (error) {
  console.log('ERROR Occurred')
  console.error(error)
}

const clearGrid = function () {
  $('#cell0').html('')
  $('#cell1').html('')
  $('#cell2').html('')
  $('#cell3').html('')
  $('#cell4').html('')
  $('#cell5').html('')
  $('#cell6').html('')
  $('#cell7').html('')
  $('#cell8').html('')
}

module.exports = {
  displayResult,
  displayTurn,
  newGameSuccess,
  newGameFailure
}

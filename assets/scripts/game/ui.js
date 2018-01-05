'use strict'

const gameEngine = require('./game-engine')
const facts = require('./facts')
const store = require('../store')

// Code below renders current time and date
const currentDate = new Date()
const dateTime = 'Time: ' + currentDate.getHours() + ':' + currentDate.getMinutes() + ' on ' + (currentDate.getMonth() + 1) + '/' + currentDate.getDate() + '/' + currentDate.getFullYear()
$('.time-box').html(dateTime)

const displayResult = function () {
  $('#result').html(gameEngine.game.displayGameStatus())
  $('#result').css('background', '#f00')
}

const displayTurn = function () {
  if (gameEngine.game.over === true && gameEngine.game.draw === false) {
    $('#current-turn').html(`The game is over! ${gameEngine.game.winner.toUpperCase()} has won!`)
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
  // console.log('Create Game Success! Data is:', data)
  // console.log('Game ID is:', data.game.id)
  store.apiGame = data.game
  gameEngine.game.id = store.apiGame.id
  gameEngine.game.cells = store.apiGame.cells
  gameEngine.game.player_x = store.apiGame.player_x
  gameEngine.game.over = store.apiGame.over
  gameEngine.game.winner = undefined
  gameEngine.game.draw = false
  clearGrid()
  $('.result-box').css('display', 'inline-block')
  $('#result').html('Game has Begun!')
  $('#result').css('background', '#f00')
  facts.newFact()
  $('#current-turn-subtext').html('')
  $('#current-turn').html(`It is X's Turn!`)
  $('.game-id-box').html(`<b>Game ID:</b> ${data.game.id}`)
  // console.log('Now, the game object is:', gameEngine.game)
}

const newGameFailure = function () {
  if (store.user === undefined) {
    $('.new-game-box').html('Please Sign In to Play!')
  }
  // console.log('ERROR Occurred')
  // console.error(error)
}

const getOverGamesSuccess = function (data) {
  const firstPastGamesLength = data.games.length
  store.pastGames = data.games
  // console.log('store.pastGames is:', store.pastGames)
  // console.log('firstPastGamesLength is:', firstPastGamesLength)
  if (firstPastGamesLength !== store.pastGames.length) {
    return gameEngine.playerStats.getStats(data.games[data.games.length - 1])
  }
  gameEngine.playerStats.stats.wins = 0
  gameEngine.playerStats.stats.losses = 0
  gameEngine.playerStats.stats.draws = 0
  for (let i = 0; i < store.pastGames.length; i++) {
    // console.log(store.pastGames[i])
    const that = store.pastGames[i]
    gameEngine.playerStats.getStats(that)
  }
  $('.player-box').html(`<b>Player X:</b> ${store.user.email}`)
  $('.time-box').html(`
    <p><b><u> - Tic-Tac-Toe Record - </u></b></p>
    <p><b>Wins:</b> ${gameEngine.playerStats.stats.wins}<br>
    <b>Losses:</b> ${gameEngine.playerStats.stats.losses}<br>
    <b>Draws:</b> ${gameEngine.playerStats.stats.draws}</p>
    `)
}

// const getOverGamesFailure = function (error) {
//   // console.log('ERROR OCCURED')
//   // console.error(error)
// }

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
  newGameFailure,
  getOverGamesSuccess,
  getOverGamesFailure,
  dateTime
}

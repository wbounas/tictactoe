'use strict'

const api = require('./api')
const gameEngine = require('./game-engine')
const ui = require('./ui')
const store = require('../store')

const hoverIn = function () {
  $(this).css('background', 'green')
}

const hoverOut = function () {
  $(this).css('background', 'none')
}

const gameButtonHoverOut = function () {
  $(this).css('background', '#ddd')
}

const onClickMarker = function () {
  if (store.user === undefined || store.user === null) {
    return ''
  }
  if (gameEngine.game.over) {
    return $('#current-turn-subtext').html('ERROR - Game is Over, Cannot Place Marker')
  } else if ($(this).html() === 'x' || $(this).html() === 'o') {
    return $('#current-turn-subtext').html('ERROR - Cannot Overwrite Placed Marker')
  }
  $(this).html(gameEngine.game.whoseTurn())
  // console.log(this.dataset.cellIndex)
  if (store.user.token) {
    gameEngine.game.setMarker(this.dataset.cellIndex)
    const data = {}
    data.game = {}
    data.game.cell = {}
    data.game.cell.index = this.dataset.cellIndex
    data.game.cell.value = $(this).html()
    // console.log(data)
    gameEngine.game.setGameStatus()
    data.game.over = gameEngine.game.over
    api.updateGame(data)
    ui.displayResult()
    ui.displayTurn()
    $('#current-turn-subtext').html(null)
    console.log(gameEngine.game.cells)
    console.log(gameEngine.game)
  } else if (!store.user.token) {
    $(this).html('')
  }
}

const onNewGame = function () {
  // debugger
  if (!store.user || !store.user.token) {
    $('.new-game-box').html('Please Sign In to Play!')
  } else if (store.user.token) {
    $('.new-game-box').html('New Game')
    const blankGame = {}
    console.log('this worked?')
    console.log('store.user is:', store.user)
    api.createGame(blankGame)
      .then(ui.newGameSuccess)
      .catch(ui.newGameFailure)
    $('.game-id-box').html(`Game ID: ${gameEngine.game.id}`)
  }
}

const getPlayerStats = function () {
  if (store.user.token) {
    $('.score-box').html(`${store.user.email} is the player.`)
    api.getOverGames()
      .then(ui.getOverGamesSuccess)
      .catch(ui.getOverGamesFailure)
    // api.getOvergames()
    //   .then($('.score-box').html(`${store.user.email}:`))
  }
}

const addClickHandlers = function () {
  $('#cell0').on('click', onClickMarker)
  $('#cell1').on('click', onClickMarker)
  $('#cell2').on('click', onClickMarker)
  $('#cell3').on('click', onClickMarker)
  $('#cell4').on('click', onClickMarker)
  $('#cell5').on('click', onClickMarker)
  $('#cell6').on('click', onClickMarker)
  $('#cell7').on('click', onClickMarker)
  $('#cell8').on('click', onClickMarker)
  $('.new-game-box').on('click', onNewGame)
  $('.new-game-box').on('click', getPlayerStats)
}

const addHoverHandlers = function () {
  $('#cell0').hover(hoverIn, hoverOut)
  $('#cell1').hover(hoverIn, hoverOut)
  $('#cell2').hover(hoverIn, hoverOut)
  $('#cell3').hover(hoverIn, hoverOut)
  $('#cell4').hover(hoverIn, hoverOut)
  $('#cell5').hover(hoverIn, hoverOut)
  $('#cell6').hover(hoverIn, hoverOut)
  $('#cell7').hover(hoverIn, hoverOut)
  $('#cell8').hover(hoverIn, hoverOut)
  $('.new-game-box').hover(hoverIn, gameButtonHoverOut)
}

module.exports = {
  onNewGame,
  addClickHandlers,
  addHoverHandlers,
  getPlayerStats
}

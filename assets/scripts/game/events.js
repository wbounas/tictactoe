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
  if (gameEngine.game.over) {
    return $('#current-turn-subtext').html('ERROR - Game is Over, Cannot Place Marker')
  } else if ($(this).html() === 'x' || $(this).html() === 'o') {
    return $('#current-turn-subtext').html('ERROR - Cannot Overwrite Placed Marker')
  }
  $(this).html(gameEngine.game.whoseTurn())
  // console.log(this.dataset.cellIndex)
  gameEngine.game.setMarker(this.dataset.cellIndex)
  gameEngine.game.setGameStatus()
  ui.displayResult()
  ui.displayTurn()
  $('#current-turn-subtext').html(null)
  console.log(gameEngine.game.cells)
  console.log(gameEngine.game)
}

const onNewGame = function () {
  const blankGame = {}
  console.log('this worked?')
  api.createGame(blankGame)
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
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
  addClickHandlers,
  addHoverHandlers
}

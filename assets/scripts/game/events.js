'use strict'

const gameEngine = require('./game-engine')
const ui = require('./ui')
const store = require('../store')

const testHoverIn = function () {
  $(this).css('background', 'green')
  // $(this).on('click', onClick)
  // $(this).html(onClick())
}

const testHoverOut = function () {
  $(this).css('background', 'none')
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
}

const addHoverHandlers = function () {
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
  addClickHandlers,
  addHoverHandlers
}

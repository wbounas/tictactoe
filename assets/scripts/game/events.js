'use strict'

const gameEngine = require('./game-engine')

const testHoverIn = function () {
  $(this).css('background', 'green')
  // $(this).on('click', onClick)
  // $(this).html(onClick())
}

const testHoverOut = function () {
  $(this).css('background', 'none')
}

const onClickMarker = function () {
  if ($(this).html() === 'x' || $(this).html() === 'o') {
    return console.log("you can't do that")
  } else if (gameEngine.game.over) {
    return console.log("game is over, you can't do that")
  }
  $(this).html(gameEngine.game.whoseTurn())
  // console.log(this.dataset.cellIndex)
  gameEngine.game.setMarker(this.dataset.cellIndex)
  gameEngine.game.setGameStatus()
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

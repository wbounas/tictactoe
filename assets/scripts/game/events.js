'use strict'

const gameEngine = require('./game-engine')

const gameBoard = gameEngine.gameBoard
const addMarker = gameEngine.addMarker
let turnNumber = gameEngine.turnNumber
let turnPlayer = gameEngine.turnPlayer
let over = gameEngine.over

const mark_X = function () {
  $(this).text('X')
  $(this).css('background', '#aaa')
  console.log('this is:', this)
  addMarker(this.dataset.cellIndex, 'X')
  console.log(gameBoard)
}

const mark_Y = function () {
  $(this).text('Y')
  $(this).css('background', '#aaa')
}

const testHoverIn = function () {
  $(this).css('background', 'green')
  $(this).on('click', mark_X)
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

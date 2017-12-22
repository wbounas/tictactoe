'use strict'

const gameEngine = require('./game-engine')

const mark_X = function () {
  $(this).html('X')
  $(this).css('background', '#aaa')
}

const mark_Y = function () {
  $(this).html('X')
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

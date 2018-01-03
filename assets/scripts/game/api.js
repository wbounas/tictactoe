'use strict'

const config = require('../config')
const gameEngine = require('../game/game-engine')
const store = require('../store')

const createGame = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const updateGame = function (data) {
  console.log('update data is:', data)
  // console.log('data.example.id is:', data.example.id)
  // debugger
  return $.ajax({
    url: config.apiOrigin + '/games/' + gameEngine.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const getOverGames = function () {
  return $.ajax({
    url: config.apiOrigin + '/games?over=true',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createGame,
  updateGame,
  getOverGames
}

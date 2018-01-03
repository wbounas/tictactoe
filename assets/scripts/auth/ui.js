'use strict'

const gameEvents = require('../game/events')
const gameUi = require('../game/ui')
const store = require('../store')

const signUpSuccess = function (data) {
  console.log('Sign Up Successful! Data is:', data)
  $('.sign-up-message').html('Account Created! Please Sign In to Play')
  $('.sign-up-message').css('color', '#0f0')
  $('.sign-up-message').css('background', '#444')
  store.user = data.user
  console.log('in signUpSuccess, store.user is:', store.user)
  // let signUpMessage = document.getElementById('saved')
  // console.log(signUpMessage)
  // signUpMessage = setTimeout(function () {
  //   signUpMessage.textContent = ''
  // }, 5000)
  $('#sign-up').each(function () {
    this.reset()
  })
}

const signUpFailure = function (error) {
  console.error(error)
  $('.sign-up-message').html('Error - Check Console')
  $('.sign-up-message').css('color', '#f00')
  $('#sign-up').each(function () {
    this.reset()
  })
}

const signInSuccess = function (data) {
  console.log('Sign-In Successful! Data is:', data)
  $('#sign-in-message').html('Account Signed In')
  $('#sign-in-message').css('color', '#0f0')
  store.user = data.user
  console.log('Stored user is:', store.user)
  console.log('Stored data is:', store)
  $('#sign-in').each(function () {
    this.reset()
  })
  setTimeout(function () { $('.login-box').css('display', 'none') }, 1000)
  // $('.login-box').css('visibility', 'hidden')
  setTimeout(function () { $('#sign-in-message').html('') }, 500)
  setTimeout(function () { $('.signed-in-box').css('display', 'inline-block') }, 1000)
  // $('.signed-in-box').css('visibility', 'visible')
  gameEvents.getPlayerStats()
  gameEvents.onNewGame()
}

const signInFailure = function (error) {
  console.error(error)
  $('#sign-in-message').html('Error - Check Console')
  $('#sign-in-message').css('color', '#f00')
  $('#sign-in').each(function () {
    this.reset()
  })
}

const changePasswordSuccess = function (data) {
  // console.log below will return UNDEFINED
  // console.log('Change Password Successful! Data is:', data)
  $('#change-password-message').html('Changed Password Successfully!')
  $('#change-password-message').css('color', '#0f0')
  $('#change-password').each(function () {
    this.reset()
  })
  setTimeout(function () { $('#change-password-message').html('') }, 5000)
}

const changePasswordFailure = function (error) {
  console.error(error)
  $('#change-password-message').html('Error - Check Console')
  $('#change-password-message').css('color', '#f00')
  $('#change-password').each(function () {
    this.reset()
  })
}

const signOutSuccess = function (data) {
  console.log('Sign-Out Data is:', data)
  store.user = null
  $('#sign-out-message').html('Log Out Successful!')
  $('#sign-out-message').css('color', '#0f0')
  $('.new-game-box').html('Please Sign In to Play!')
  $('#current-turn').html('Please Sign In to Play!')
  $('.time-box').html(gameUi.dateTime)
  $('.player-box').html('Player Score')
  setTimeout(function () { $('.signed-in-box').css('display', 'none') }, 1000)
  setTimeout(function () { $('#sign-out-message').html('') }, 500)
  setTimeout(function () { $('.login-box').css('display', 'inline-block') }, 1000)
}

const signOutFailure = function (error) {
  console.error(error)
  $('#sign-out-message').html('Error - Check Console')
  $('#sign-out-message').css('color', '#f00')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}

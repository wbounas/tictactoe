'use strict'

const gameEvents = require('../game/events')
const gameUi = require('../game/ui')
const store = require('../store')

const signUpSuccess = function (data) {
  // console.log('Sign Up Successful! Data is:', data)
  $('.sign-up-message').html('Account Created! Please Sign In to Play')
  $('.sign-up-message').css('color', '#0f0')
  $('.sign-up-message').css('background', '#444')
  $('.sign-up-message').css('width', 'fit-content')
  $('.sign-up-message').css('margin', '0 auto')
  $('.sign-up-message').css('padding', '5px')
  store.user = data.user
  // console.log('in signUpSuccess, store.user is:', store.user)
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
  $('.sign-up-message').html('Error has Occurred')
  $('.sign-up-message').css('color', '#f00')
  $('#sign-up-message').css('background', '#777')
  $('#sign-up-message').css('width', 'fit-content')
  $('#sign-up-message').css('margin', '0 auto')
  $('#sign-up').each(function () {
    this.reset()
  })
}

const signInSuccess = function (data) {
  // console.log('Sign-In Successful! Data is:', data)
  $('#sign-in-message').html('Account Signed In')
  $('#sign-in-message').css('color', '#0f0')
  $('#sign-in-message').css('background', '#777')
  $('#sign-in-message').css('width', 'fit-content')
  $('#sign-in-message').css('margin', '0 auto')
  // $('#sign-in-message').css('padding', '5px')
  store.user = data.user
  // console.log('Stored user is:', store.user)
  // console.log('Stored data is:', store)
  $('#sign-in').each(function () {
    this.reset()
  })
  setTimeout(function () { $('.login-box').css('display', 'none') }, 1000)
  // $('.login-box').css('visibility', 'hidden')
  setTimeout(function () { $('#sign-in-message').html('') }, 500)
  setTimeout(function () { $('.signed-in-box').css('display', 'inline-block') }, 1000)
  $('#logged-in-user').html(`${store.user.email}`)
  $('.signed-in-box').css('border', '0')
  // $('.signed-in-box').css('visibility', 'visible')
  gameEvents.getPlayerStats()
  gameEvents.onNewGame()
}

const signInFailure = function (error) {
  console.error(error)
  $('#sign-in-message').html('Error has Occurred')
  $('#sign-in-message').css('color', '#f00')
  $('#sign-in-message').css('background', '#777')
  $('#sign-in-message').css('width', 'fit-content')
  $('#sign-in-message').css('margin', '0 auto')
  $('#sign-in').each(function () {
    this.reset()
  })
}

const changePasswordSuccess = function (data) {
  // console.log below will return UNDEFINED
  // console.log('Change Password Successful! Data is:', data)
  $('#change-password-message').html('Changed Password Successfully!')
  $('#change-password-message').css('color', '#0f0')
  $('#change-password-message').css('background', '#777')
  $('#change-password-message').css('width', 'fit-content')
  $('#change-password-message').css('margin', '0 auto')
  $('#change-password').each(function () {
    this.reset()
  })
  setTimeout(function () { $('#change-password-message').html('') }, 3000)
}

const changePasswordFailure = function (error) {
  console.error(error)
  $('#change-password-message').html('Error has Occurred')
  $('#change-password-message').css('color', '#f00')
  $('#change-password-message').css('background', '#777')
  $('#change-password-message').css('width', 'fit-content')
  $('#change-password-message').css('margin', '0 auto')
  $('#change-password').each(function () {
    this.reset()
  })
}

const signOutSuccess = function (data) {
  // console.log('Sign-Out Data is:', data)
  store.user = null
  $('#sign-out-message').html('Log Out Successful!')
  $('#sign-out-message').css('color', '#0f0')
  $('#sign-out-message').css('background', '#777')
  $('#sign-out-message').css('width', 'fit-content')
  $('#sign-out-message').css('margin', '0 auto')
  $('.new-game-box').html('Please Sign In to Play!')
  $('#current-turn').html('Please Sign In to Play!')
  $('.time-box').html(gameUi.dateTime)
  $('.player-box').html('Player Score')
  $('.game-id-box').html('<b>Game ID:</b> 0 (Not Signed In!)')
  setTimeout(function () { $('.signed-in-box').css('display', 'none') }, 1000)
  setTimeout(function () { $('#sign-out-message').html('') }, 500)
  setTimeout(function () { $('.login-box').css('display', 'inline-block') }, 1000)
  $('.result-box').css('display', 'none')
}

const signOutFailure = function (error) {
  console.error(error)
  $('#sign-out-message').html('Error has Occurred')
  $('#sign-out-message').css('color', '#f00')
  $('#sign-out-message').css('background', '#777')
  $('#sign-out-message').css('width', 'fit-content')
  $('#sign-out-message').css('margin', '0 auto')
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

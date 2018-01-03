'use strict'

const gameEvents = require('../game/events')
const store = require('../store')

const signUpSuccess = function (data) {
  console.log('Sign Up Successful! Data is:', data)
  $('#sign-up-message').html('Account Created! Please Sign In to Play')
  $('#sign-up-message').css('color', '#0f0')
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
  $('#sign-up-message').html('Error - Check Console')
  $('#sign-up-message').css('color', '#f00')
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
  $('#sign-out-message').html('Log Out Successful!')
  $('#sign-out-message').css('color', '#0f0')
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

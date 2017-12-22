'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  console.log('Sign Up Successful! Data is:', data)
  $('#sign-up-message').html('Account Created')
  $('#sign-up-message').css('color', '#0f0')
}

const signUpFailure = function (error) {
  console.error(error)
  $('#sign-up-message').html('Error - Check Console')
  $('#sign-up-message').css('color', '#f00')
}

const signInSuccess = function (data) {
  console.log('Sign-In Successful! Data is:', data)
  $('#sign-in-message').html('Account Signed In')
  $('#sign-in-message').css('color', '#0f0')
  store.user = data.user
  console.log('Stored user is:', store.user)
  console.log('Stored data is:', store)
}

const signInFailure = function (error) {
  console.error(error)
  $('#sign-in-message').html('Error - Check Console')
  $('#sign-in-message').css('color', '#f00')
}

const changePasswordSuccess = function (data) {
  // console.log below will return UNDEFINED
  // console.log('Change Password Successful! Data is:', data)
  $('#change-password-message').html('Changed Password Successfully!')
  $('#change-password-message').css('color', '#0f0')
}

const changePasswordFailure = function (error) {
  console.error(error)
  $('#change-password-message').html('Error - Check Console')
  $('#change-password-message').css('color', '#f00')
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

'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  console.log('Success! Data is:', data)
  $('#sign-up-message').html('Account Created')
  $('#sign-up-message').css('color', '#0f0')
}

const signUpFailure = function (error) {
  console.error(error)
  $('#sign-up-message').html('Error - Check Console')
  $('#sign-up-message').css('color', '#f00')
}

module.exports = {
  signUpSuccess,
  signUpFailure
}

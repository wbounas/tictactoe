'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  console.log('Success! Data is:', data)
}

const signUpFailure = function (error) {
  console.error(error)
}

module.exports = {
  signUpSuccess,
  signUpFailure
}

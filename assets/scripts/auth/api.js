'use strict'

const config = require('../config')
const store = require('../store')

// Create AJAX Call for Sign-Up
// need url
// need method (HTTP verb)
// need data
const signUp = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    data
  })
}

const signIn = function (data) {
  console.log('api signIn function "DATA" is:', data)
  return $.ajax({
    url: config.apiOrigin + '/sign-in',
    method: 'POST',
    data
  })
}

module.exports = {
  signUp,
  signIn
}

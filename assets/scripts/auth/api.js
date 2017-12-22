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

module.exports = {
  signUp
}

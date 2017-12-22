'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('../store')

console.log(getFormFields)

const onSignUp = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  // console.log(data)
  // console.log('it worked?')
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const addHandlers = function () {
  $('#sign-up').on('submit', onSignUp)
}

module.exports = {
  onSignUp,
  addHandlers
}

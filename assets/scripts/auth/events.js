const getFormFields = require('../../../lib/get-form-fields.js')

console.log(getFormFields)

const onSignUp = function (event) {
  event.preventDefault()
  console.log('it worked?')
}

const addHandlers = function () {
  $('#sign-up').on('submit', onSignUp)
}

module.exports = {
  onSignUp,
  addHandlers
}

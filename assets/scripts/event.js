'use strict'

const getFormFields = require('./lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onSignUp = event => {
  // on // const onSignUp = function(event)
  event.preventDefault()
  const data = getFormFields($('#sign-up-form')[0])
  // take this data and send it to the server
  // using a HTTP request
  api.signUp(data)
    .then(ui.signUpSuccess) // if the request passed
    .catch(ui.signUpFailure) // if the request failed
}

const onSignIn = event => {
  // on // const onSignUp = function(event)
  event.preventDefault()
  const data = getFormFields($('#sign-in-form')[0])
  // take this data and send it to the server
  // using a HTTP request
  api.signIn(data)
    .then(ui.signInSuccess) // if the request passed
    .catch(ui.signInFailure) // if the request failed
}

const onSignOut = event => {
  // on // const onSignOut = function(event)
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess) // if the request passed
    .catch(ui.signOutFailure) // if the request failed
}

const onChangePassword = event => {
  // on // const onChangePassword = function(event)
  event.preventDefault()
  const data = getFormFields($('#change-password-form'))
  // take this data and send it to the server
  // using a HTTP request
  api.changePassword(data)
    .then(ui.changePasswordSuccess) // if the request passed
    .catch(ui.changePasswordFailure) // if the request failed
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword
}

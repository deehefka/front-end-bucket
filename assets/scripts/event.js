'use strict'

const getFormFields = require('../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onSignUp = event => {
  // on // const onSignUp = function(event)
  event.preventDefault()
  const data = getFormFields(event.target)
  // take this data and send it to the server
  // using a HTTP request
  api.signUp(data)
    .then(ui.signUpSuccess) // if the request passed
    .catch(ui.signUpFailure) // if the request failed
}

const onSignIn = event => {
  // on // const onSignUp = function(event)
  event.preventDefault()
  const data = getFormFields(event.target)
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
  const data = getFormFields(event.target)
  // take this data and send it to the server
  // using a HTTP request
  api.changePassword(data)
    .then(ui.changePasswordSuccess) // if the request passed
    .catch(ui.changePasswordFailure) // if the request failed
}

const onBucketListCreate = event => {
  event.preventDefault()
  // $('#todo-item').show()
  // $('#list').show()
  const data = getFormFields(event.target)
  api.bucketListCreate(data)
    .then(ui.bucketListCreateSuccess)
    .catch(ui.bucketListCreateFailure)
}

const onBucketListUpdate = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  // pulling specific data from id of to-do item
  api.bucketListUpdate(data, data.bucketList.id)
    .then(ui.bucketListUpdateSuccess) // if your request was succesful
    .catch(ui.bucketListUpdateFailure) // if your request failed
}

const onBucketListIndex = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.bucketListIndex(data)
    .then(ui.bucketListIndexSuccess) // if your request was succesful
    .catch(ui.bucketListIndexFailure) // if your request failed
}

const onBucketListDelete = event => {
  event.preventDefault()
  // deleting data input on click
  const data = $('#delete-task').val()
  // const data = $('#delete-todo_list[id]').val()
  api.bucketListDelete(data)
    .then(ui.bucketListDeleteSuccess) // if your request was succesful
    .catch(ui.bucketListDeleteFailure) // if your request failed
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  onBucketListDelete,
  onBucketListIndex,
  onBucketListUpdate,
  onBucketListCreate
}

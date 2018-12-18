'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./event.js')

// const JS = require('./JS.js')

$(() => {
  // your JS code goes here
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#sign-out-form').on('click', authEvents.onSignOut)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#bucket-list-create').on('submit', authEvents.onTodoListCreate)
  $('#bucket-list-index').on('click', authEvents.onTodoListIndex)
  $('#bucket-list-delete').on('submit', authEvents.onTodoListDelete)
  $('#bucket-list-update').on('submit', authEvents.onTodoListUpdate)
})

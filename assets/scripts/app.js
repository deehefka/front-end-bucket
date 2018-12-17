'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./event.js')

// const JS = require('./JS.js')

$(() => {
  // your JS code goes here
  $('#sign-up').on('click', authEvents.onSignUp)
  $('#sign-in').on('click', authEvents.onSignIn)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#change-password').on('click', authEvents.onChangePassword)
  $('#bucket-list-create').on('submit', authEvents.onBucketListCreate)
  $('#bucket-list-index').on('submit', authEvents.onBucketListIndex)
  $('#bucket-list-delete').on('submit', authEvents.onBucketListDelete)
  $('#bucket-list-update').on('submit', authEvents.onBucketListUpdate)
})

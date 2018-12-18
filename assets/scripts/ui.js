'use strict'

const store = require('./store.js')

// methods signUpSuccess,signUpFailure
const signUpSuccess = data => {
  $('#message').text('Signed up Successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  // console.log('signUpSuccess ran. Data is :', data)
  // $('#signUpModal').modal('hide')
  window.setTimeout(function () {
    $('#signUpModal').modal('hide')
  }, 1000)
}

const signUpFailure = error => {
  $('#message').text('Error on SignUp')
  $('#message').removeClass()
  $('#message').addClass('failure')
// console.error('signUpFailure ran. Error is :', error)
}

const signInSuccess = data => {
  store.user = data.user
  $('#message2').text('Signed In Successfully')
  $('#message2').removeClass()
  $('#message2').addClass('success')
  // console.log('signInSuccess ran. Error is :', data)
  // $('#signInModal').modal('hide')
  window.setTimeout(function () {
    $('#signInModal').modal('hide')
  }, 1000)
  $('#gameBoard').css('visibility', 'visible')
}

const signInFailure = error => {
  $('#message2').text('Error on SignIn')
  $('#message2').removeClass()
  $('#message2').addClass('failure')
  // console.error('signInFailure ran. Error is :', error)
}

const signOutSuccess = data => {
  store.user = null
  $('#message3').text('Signed Out Successfully')
  $('#message3').removeClass()
  $('#message3').addClass('success')
  // console.log('signOutSuccess ran. Error is :')
  // $('#signOutModal').modal('hide')
  window.setTimeout(function () {
    $('#signOutModal').modal('hide')
  }, 1000)
  $('#gameBoard').css('visibility', 'hidden')
}

const signOutFailure = error => {
  store.user = null
  $('#message3').text('Error on SignOut')
  $('#message3').removeClass()
  $('#message3').addClass('failure')
  // console.error('signOutFailure ran. Error is :', error)
}

const changePasswordSuccess = data => {
  $('#message4').text('Change Password Successfully')
  $('#message4').removeClass()
  $('#message4').addClass('success')
  // console.log('changePasswordSuccess ran. Data is :', data)
  // $('#changePasswordModal').modal('hide')
  window.setTimeout(function () {
    $('#changePasswordModal').modal('hide')
  }, 1000)
}

const changePasswordFailure = error => {
  $('#message4').text('Error on Change Password')
  $('#message4').removeClass()
  $('#message4').addClass('failure')
  // console.error('changePasswordFailure ran. Error is :', error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}

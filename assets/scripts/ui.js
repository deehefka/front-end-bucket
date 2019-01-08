'use strict'

const store = require('./store.js')
const bucketListTemplate = require('./bucketlist.handlebars')

$('#animation-content').hide()
$('#showEditModal').hide()

// methods signUpSuccess,signUpFailure
const signUpSuccess = data => {
  $('#message').text('Signed up Successfully')
  $('#message').removeClass()
  $('#sign-up-form').trigger('reset')
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
  $('#sign-up-form').trigger('reset')
  //console.error('signUpFailure ran. Error is :', error)
}

const signInSuccess = data => {
  store.user = data.user
  store.userSignedIn = true
  $('#sign-up-btn').hide()
  $('#sign-in-btn').hide()
  $('#sign-out-btn').show()
  $('#password-btn').show()
  $('#animation-content').show()
  $('#showModal').show()
  $('#showEditModal').show()
  $('#message2').text('Signed In Successfully')
  $('#message2').removeClass()
  $('#message2').addClass('success')
  $('#sign-in-form').trigger('reset')
  // console.log('signInSuccess ran. Error is :', data)
  // $('#signInModal').modal('hide')
  window.setTimeout(function () {
    $('#signInModal').modal('hide')
  }, 500)
  // $('#gameBoard').css('visibility', 'visible')
}

const signInFailure = error => {
  $('#message2').text('Error on SignIn')
  $('#message2').removeClass()
  $('#message2').addClass('failure')
  $('#sign-in-form').trigger('reset')
  //console.error('signInFailure ran. Error is :', error)
}

const signOutSuccess = data => {
  store.userSignedIn = false
  $('#sign-up-btn').show()
  $('#sign-in-btn').show()
  $('#sign-out-btn').hide()
  $('#password-btn').hide()
  $('#animation-content').hide()
  $('#showModal').hide()
  $('#showEditModal').hide()
  store.user = null
  $('#message3').text('Signed Out Successfully')
  $('#message3').removeClass()
  $('#message3').addClass('success')
  $('#message2').empty()
  // console.log('signOutSuccess ran. Error is :')
  // $('#signOutModal').modal('hide')
  window.setTimeout(function () {
    $('#signOutModal').modal('hide')
  }, 500)
  // $('#gameBoard').css('visibility', 'hidden')
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
  $('#change-password-form').trigger('reset')
  // console.log('changePasswordSuccess ran. Data is :', data)
  // $('#changePasswordModal').modal('hide')
  window.setTimeout(function () {
    $('#changePasswordModal').modal('hide')
  }, 500)
}

const changePasswordFailure = error => {
  $('#message4').text('Error on Change Password')
  $('#message4').removeClass()
  $('#message4').addClass('failure')
  $('#change-password-form').trigger('reset')
  //console.error('changePasswordFailure ran. Error is :', error)
}

const bucketListCreateSuccess = data => {
  store.bucketLists = data.bucketLists
  //console.log(data)
  $('#message6').text('You created an item for your Bucket list!')
  // document.getElementById('bucket-list-item').hidden = false
  $('#message6').removeClass()
  $('#message6').addClass('success')
  $('#bucket-list-create').trigger('reset')
}

const bucketListCreateFailure = data => {
  $('#message6').text('Error on Bucket List item creation')
  $('#message6').removeClass()
  $('#message6').addClass('failure')
  // console.error('signUpFailure ran. Error is :', error)
  $('#bucket-list-create').trigger('reset')
}

const bucketListDeleteSuccess = data => {
  $('#message6').text('You deleted a Bucket list item!')
  $('#message6').removeClass()
  $('#message6').addClass('success')
  $('#bucket-list-delete').trigger('reset')
}

const bucketListDeleteFailure = data => {
  $('#message6').text('Failure on Bucket List item delete')
  $('#message6').removeClass()
  $('#message6').addClass('failure')
  $('#bucket-list-delete').trigger('reset')
}

const bucketListUpdateSuccess = data => {
  // store.bucketLists = data.bucketLists
  //console.log(data)
  $('#message6').text('You updated an item for your Bucket list!')
  $('#message6').removeClass()
  $('#message6').addClass('success')
  $('#bucket-list-update').trigger('reset')
}

const bucketListUpdateFailure = data => {
  $('#message6').text('Error on bucket list item update')
  $('#message6').removeClass()
  $('#message6').addClass('failure')
  // console.error('signUpFailure ran. Error is :', error)
  $('#bucket-list-update').trigger('reset')
}

const bucketListIndexSuccess = data => {
  $('#output').empty()

  const showbucketListHtml = bucketListTemplate({ bucketLists: data.bucketLists })
  $('#output').append(showbucketListHtml)

  $('#message5').text('Here is your Bucket List!')
  $('#message5').removeClass()
  $('#message5').addClass('success')
}

const bucketListIndexFailure = data => {
  $('#message5').text('Failure on Bucket List index')
  $('#message5').removeClass()
  $('#message5').addClass('failure')
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
  changePasswordFailure,
  bucketListCreateSuccess,
  bucketListCreateFailure,
  bucketListUpdateSuccess,
  bucketListUpdateFailure,
  bucketListIndexSuccess,
  bucketListIndexFailure,
  bucketListDeleteSuccess,
  bucketListDeleteFailure
}

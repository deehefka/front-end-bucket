'use strict'

const config = require('./config.js')
const store = require('./store.js')

const signUp = data => {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: data
  })
}

const signIn = data => {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: data
  })
}

const changePassword = function (data) {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const signOut = () => {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const bucketListCreate = data => {
  return $.ajax({
    url: config.apiUrl + '/bucketLists',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}
// pulled from class lectures
const bucketListUpdate = (data, id) => {
  return $.ajax({
    url: config.apiUrl + '/bucketLists/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}
// pulled from class lectures
const bucketListDelete = id => {
  return $.ajax({
    url: config.apiUrl + '/bucketLists/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
// pulled from class lectures
const bucketListIndex = () => {
  return $.ajax({
    url: config.apiUrl + '/bucketLists',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
    // data: data
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  bucketListIndex,
  bucketListDelete,
  bucketListUpdate,
  bucketListCreate
}

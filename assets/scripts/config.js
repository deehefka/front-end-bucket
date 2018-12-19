'use strict'

let apiUrl
const apiUrls = {
  development: 'http://localhost:4741',
  production: 'https://boiling-temple-34705.herokuapp.com'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl
}

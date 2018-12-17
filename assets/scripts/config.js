'use strict'

let apiUrl
const apiUrls = {
  development: 'https://aqueous-atoll-85096.herokuapp.com',
  production: 'https://Test-wdi.herokuapp.com'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl
}

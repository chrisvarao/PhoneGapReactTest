import stub_server from './stub_server'
const _ = require('lodash')

var APIHost = __API__;

if (__STUB_SERVER__) {
  stub_server();
}

function _get_api_url(path) {
  return `${APIHost}${path}`
}

function _end_point(method, url_template, headers) {
  return (template_values, data_body) => {
    var compiled_url_template = _.template(url_template)
    var url = _get_api_url(compiled_url_template(template_values))

    var request = {
      method: method,
    }

    if (headers) {
      request.headers = new Headers(headers)
    }

    if (data_body) {
      request.body = JSON.stringify(data_body)
    }

    return fetch(url, request).then((response) => response.json())
  }
}

module.exports = {
  ListApi: {
    get: _end_point('get', '/list')
  } 
}

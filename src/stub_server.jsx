var responses = require('../fixtures/responses')
var fetchMock = require('fetch-mock')

var APIHost = __API__

function _get_api_url(path) {
  return `${APIHost}${path}`
}

var api_prefix = _get_api_url('/api')
var api_regexp = new RegExp(`^${api_prefix}/.*$`)

export default () => {
  fetchMock.mock(api_regexp, (url, request_opts) => {
    var path = url.split('/api/')[1]
    var tokens = path.split('/')
    var method = request_opts['method']
    var cur_response = responses[method];

    for (var token_i=0; token_i<tokens.length; token_i++) {
      var token = tokens[token_i]
      if (cur_response[token]) {
        cur_response = cur_response[token]
      } else {
        cur_response = cur_response['default']
      }
    }

    return cur_response
  })
}

var fetchMock = require('fetch-mock')

var APIHost = __API__

export default () => {
  fetchMock.get('*', ['this', 'list', 'was', 'loaded', 'from', 'the', 'internet'])
}

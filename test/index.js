import ClientTests from './client/client'
import IntegrationTests from './e2e/e2e'

const testTokens = __karma__.config.args[0].split(':')
const runAllTests = testTokens[0] === 'all'
const runClientTests = runAllTests || testTokens[0] === 'client'
const runE2ETests = runAllTests || testTokens[0] === 'e2e'

if (runClientTests) {
  ClientTests(testTokens[1])
}

if (runE2ETests) {
  IntegrationTests()
}

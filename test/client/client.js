import UnitTests from './unit/unit'

export default (testType) => {
  var runAllTests = testType === undefined
  var runUnitTests = runAllTests || testType === 'unit'
  var runIntegrationTests = runAllTests || testType === 'integration'

  if (runUnitTests) {
    UnitTests()
  }

  if (runIntegrationTests) {
    console.debug('Running Integration Tests')
    // TODO
  }
}

import '../../../../src/css/index.css'

import React from 'react'
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils' // ES6

import Hello from '../../../../src/components/Hello'

export default () => {
  describe('when the hello component renders', () => {
    var helloComponent, helloElement, button

    beforeEach(() => {
      // First we create an element, which is a description of the component we
      // would like to render (It has no methods, see:
      // https://facebook.github.io/react/docs/glossary.html so it isn't useful
      // for testing by itself)
      helloElement = React.createElement(
        Hello, // component class
        {} // props go here
        // You can also add children here as the last argument
      )

      helloComponent = ReactTestUtils.renderIntoDocument(helloElement)

      button = ReactTestUtils.findRenderedDOMComponentWithClass(
        helloComponent,
        'button-say-hello'
      )
    })

    it('button should have expected text', () => {
      expect(button.textContent).to.equal('Say hello')
    })

    describe('when the button is clicked', () => {
      beforeEach(() => {
        ReactTestUtils.Simulate.click(button)
      })

      it('should show hello message', () => {
        var message = ReactTestUtils.scryRenderedDOMComponentsWithClass(
          helloComponent,
          'hello-message'
        )

        expect(message.length).to.equal(1);
      })
    })
  })
}

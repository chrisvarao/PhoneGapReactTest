import './css/index.css';

import React from 'react';
import ReactDOM from 'react-dom';
// import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import CSSTransitionGroup from 'react-addons-css-transition-group';

import Hello from './components/Hello';

const App = React.createClass({
  getInitialState() {
    //return StepStore.getState();
    return {
      animationName: 'push',
    }
  },
  componentWillMount() {
    // Lifecycle function that is triggered just before a component mounts
  },
  componentWillUnmount() {
    // Lifecycle function that is triggered just before a component unmounts
  },
  render() {
    const { animationName } = this.state;

    const Nav = () => (
      <div>
        <Link className="link link-home" activeStyle={{color:'#53acff'}} to='/'>Home</Link>&nbsp;
        <Link className="link link-hello" activeStyle={{color:'#53acff'}} to='/hello'>Hello</Link>&nbsp;
      </div>
    )

    return (
      <Router>
        <div>
          <Route path='/' component={Nav} />
          <Route path='/hello' render={() => (
            <div>
              <CSSTransitionGroup transitionName={ animationName }
                  transitionEnterTimeout={ 300 } transitionLeaveTimeout={ 300 }>
                  {/* Remove the below component and its children */}
                  {/* and replace with your own */}
                  <Hello />
              </CSSTransitionGroup>
            </div>
          )} />
        </div>
      </Router>
    );
  },
});

ReactDOM.render(<App />, document.getElementById('app'));

module.exports = App;

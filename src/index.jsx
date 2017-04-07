import './css/index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import CSSTransitionGroup from 'react-addons-css-transition-group';
import {deepOrange500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Hello from './components/Hello'
import List from './components/List'
import Item from './components/Item'

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

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
        <Link className="link link-home" activeStyle={{color:'#53acff'}} to='/'>Home</Link>&nbsp;&middot;&nbsp;
        <Link className="link link-hello" activeStyle={{color:'#53acff'}} to='/hello'>Hello</Link>&nbsp;&middot;&nbsp;
        <Link className="link link-hello" activeStyle={{color:'#53acff'}} to='/list'>List</Link>&nbsp;&middot;&nbsp;
      </div>
    )

    return (
      <Router>
        <MuiThemeProvider muiTheme={muiTheme}>
          <div>
            <Route path='/' component={Nav} />
            <Route path='/hello' component={Hello} />
            <Route path='/list' component={List} />
            <Route path='/item/:id' component={Item} />
          </div>
        </MuiThemeProvider>
      </Router>
    );
  },
});

ReactDOM.render(<App />, document.getElementById('app'));

module.exports = App;

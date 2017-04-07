import React from 'react';

import { MemoryRouter as Router, Link, Route } from 'react-router-dom'

import {ListApi as api} from '../api_calls'

const List = React.createClass({

  displayName: 'List',

  getInitialState() {
    return {
      items: ['test', 'item'],
    };
  },

  componentDidMount() {
    api.get()
    .then((response) => {
      this.setState({
        items: response.data
      })
    })
    .catch((error) => {
      console.log(error)
    })
  },

  render() {
    return (
      <ul className="list">
        {this.state.items.map(item => (
          <li><Link to={'/item/'+item.id}>{item.name}</Link></li>
        ))}
      </ul>
    );
  },
})

module.exports = List;

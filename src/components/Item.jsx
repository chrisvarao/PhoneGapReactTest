import React from 'react';

import { MemoryRouter as Router, Link, Route } from 'react-router-dom'

import {ItemApi as api} from '../api_calls'

const Item = React.createClass({

  displayName: 'Item',

  getInitialState() {
    return {
      name: 'Loading...',
      description: 'Loading...',
    };
  },

  componentDidMount() {
    var id = this.props.match.params.id

    api.get({id: id})
    .then((response) => {
      this.setState(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  },

  render() {


    return (
      <ul className="list">
        <li><Link to='/list'>&lt;- Back</Link></li>
        <li><strong>{this.state.name}</strong></li>
        <li>{this.state.description}</li>
      </ul>
    );
  },
})

module.exports = Item;
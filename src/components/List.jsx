import React from 'react';

import {ListApi as api} from '../api_calls'

const List = React.createClass({

  displayName: 'List',

  getInitialState() {
    return {
      items: ['test', 'item'],
    };
  },

  componentDidMount() {
    api.get().then((response_json) => {
      this.setState({
        items: response_json
      })
    })
  },

  render() {
    return (
      <ul className="list">
        {this.state.items.map(item => (
          <li>{item}</li>
        ))}
      </ul>
    );
  },
})

module.exports = List;

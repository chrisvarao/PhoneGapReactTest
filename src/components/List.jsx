import React from 'react';

import axios from 'axios'

var APIHost = __API__

function getAPIUrl(path) {
  return `${APIHost}${path}`
}

const List = React.createClass({

  displayName: 'List',

  getInitialState() {
    return {
      items: this.props.items || ['test', 'item'],
    };
  },

  componentDidMount() {
    axios.get(getAPIUrl('/list')).then((res) => {
      this.setState({
        items: res.data
      })
    })
  },

  render() {
    return (
      <ul className="list">
        <li>{getAPIUrl('/list')}</li>
        {this.state.items.map(item => (
          <li>{item}</li>
        ))}
      </ul>
    );
  },
})

module.exports = List;

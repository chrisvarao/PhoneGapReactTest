import React from 'react';

import { BrowserRouter as Router, Link, Route, withRouter } from 'react-router-dom'
import { List as MaterialList, ListItem} from 'material-ui/List';

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

  onItemToggle(itemId) {
    this.props.history.push(`/item/${itemId}`)
  },

  render() {
    return (
      <MaterialList className="list">
        {this.state.items.map(item => (
          <ListItem primaryText={item.name} onClick={() => {this.onItemToggle(item.id)}} key={item.id}></ListItem>
        ))}
      </MaterialList>
    );
  },
})

module.exports = List;

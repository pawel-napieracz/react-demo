import React from 'react';
import RestaurantItem from './RestaurantItem';
import { List } from 'semantic-ui-react'

export default class RestaurantList extends React.Component {

  renderRestaurantItems(restaurants = []) {
    return restaurants.map(restaurant => (<RestaurantItem key={restaurant.id} restaurant={restaurant}/>));
  }

  render () {
    return (
        <List celled>
          {this.renderRestaurantItems(this.props.restaurants)}
        </List>
    );
  }
}
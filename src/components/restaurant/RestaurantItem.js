import React from 'react';
import { List, Image, Rating } from 'semantic-ui-react';

export default class RestaurantItem extends React.Component {

  render () {
    return (
        <List.Item>
          <Image avatar src={this.props.restaurant.image} />
              <List.Content>
              <List.Header>{this.props.restaurant.name}</List.Header>
          Rating: <Rating icon='heart' defaultRating={this.props.restaurant.rating} maxRating={5} />
          </List.Content>
        </List.Item>
    );
  }
}
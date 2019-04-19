import React from "react";
import DishItem from "./DishItem";
import {Item} from 'semantic-ui-react';

export default class DishList extends React.Component {

  renderDishList(dishes) {
    return dishes.map(dish => <DishItem key={dish.id} {...dish} onCartButtonClick={this.props.onCartButtonClick}/>);
  }

  render () {
    return (
        <Item.Group divided>
          {this.renderDishList(this.props.dishList)}
        </Item.Group>
    );
  }
}
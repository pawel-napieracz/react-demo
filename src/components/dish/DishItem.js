import React from "react";
import {Item,Button,Icon} from "semantic-ui-react";

const formatter = new Intl.NumberFormat('pl-PL', {
  style: 'currency',
  currency: 'EUR',
  minimumFractionDigits: 2
});

export default class DishItem extends React.Component {

  getFormattedPrice(price) {
    return formatter.format(price);
  }

  onCartButtonClick() {
    this.props.onCartButtonClick(this.props.id);
  }

  render() {
    let {name, description, price, image} = this.props;
    return (
        <Item>
          <Item.Image src={image} />

          <Item.Content>
            <Item.Header as='a'>{name}</Item.Header>
            <Item.Meta>
              <span>Price: {this.getFormattedPrice(price)}</span>
            </Item.Meta>
            <Item.Description>
              {description}
            </Item.Description>
            <Item.Extra>
              <Button primary floated='right' onClick={this.onCartButtonClick.bind(this)}>
                Add to cart
                <Icon name='right chevron' />
              </Button>
            </Item.Extra>
          </Item.Content>
        </Item>
    );
  }
}
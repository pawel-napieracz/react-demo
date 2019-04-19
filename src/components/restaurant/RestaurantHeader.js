import React from 'react';
import './RestaurantHeader.css';

export default class RestaurantHeader extends React.Component {

  render() {
    let { name, description, image } = this.props;
    return (
        <div className="restaurant-header" style={{backgroundImage: `url(${image})`}}>
          <h2 className="restaurant-header__name">{name}</h2>
          <span>{description}</span>
        </div>
    );
  }
}
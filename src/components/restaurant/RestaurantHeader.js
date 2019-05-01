import React from 'react';
import './RestaurantHeader.css';

export default class RestaurantHeader extends React.Component {

  render() {
    let { name, description, image } = this.props;
    return (
        <div className="restaurant-header" style={{backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${image})`}}>
          <h1 className="restaurant-header__name">{name}</h1>
          <span>{description}</span>
        </div>
    );
  }
}
import React from 'react';
import RestaurantList from '../components/restaurant/RestaurantList';
import ApiService from '../services/ApiService';
import Header from "../components/header/Header";

export default class RestaurantsPage extends React.Component {

  state = {
    restaurants: []
  };

  componentDidMount() {
    ApiService.get('/restaurants')
        .then(restaurants => {
          this.setState({restaurants});
        })
        .catch(err => {
          console.error(err);
        });
  }

  render() {
    return (
      <div>
        <Header/>
        <h1>Restaurants</h1>
        <RestaurantList restaurants={this.state.restaurants}/>
      </div>
    );
  }

}
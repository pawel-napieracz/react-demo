import React from "react";
import DishList from "../components/dish/DishList";
import Header from "../components/header/Header";
import ApiService from "../services/ApiService";
import RestaurantHeader from "../components/restaurant/RestaurantHeader";


export default class RestaurantPage extends React.Component {
  state = {};

  componentDidMount() {
    let id = this.props.id;
    ApiService.get(`/restaurants/${id}`)
        .then(restaurant => {
          this.setState({restaurant});
        });
  }

  onCartButtonClick(id) {
    alert('dish ' + id);
  }

  render() {
    if(!this.state.restaurant) {
      return null;
    }
    let {name, description, image, dishes} = this.state.restaurant;
    return [
          <Header key='header'/>,
          <RestaurantHeader key='restaurantHeader' name={name} description={description} image={image}/>,
          <DishList key='dishlist' dishList={dishes} onCartButtonClick={this.onCartButtonClick.bind(this)}/>
    ];
  }
}
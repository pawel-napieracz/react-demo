import React, { Component } from 'react';
import LoginPage from "./pages/LoginPage";
import RestaurantsPage from "./pages/RestaurantsPage";
import RestaurantPage from "./pages/RestaurantPage";

export default class Root extends Component {
  state = {
    jwt: sessionStorage.getItem('jwt')
  };

  onLoginSuccess(jwt) {
    this.setState({jwt});
  }

  render() {
    if(!this.state.jwt) {
      return <LoginPage onLoginSuccess={this.onLoginSuccess.bind(this)}/>
    } else {
      return <RestaurantPage id={1}/>
    }
  }
}
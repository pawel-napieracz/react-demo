import React from 'react';
import LoginBox from '../components/login/LoginBox';
import MsgBox from '../components/MsgBox';

import ApiService from '../services/ApiService';

export default class LoginPage extends React.Component {
  state = {};

  login(login, password) {
    console.log('ajax call', login, password);

    ApiService.get(`/token/${login}`)
        .then(body => {
          sessionStorage.setItem('jwt', body.jwt);
        })
        .catch(_ => this.setState({error:true}));
  }

  renderErrorMsgBox() {
    const { error } = this.state;
    if (error) {
      return <MsgBox type={{negative:true}} title="The credentials you provided are invalid." body="Please try again."/>
    }
  }

  render() {
    return (
        <div>
          {this.renderErrorMsgBox()}
          <LoginBox login={this.login.bind(this)}/>
        </div>
    );
  }
}
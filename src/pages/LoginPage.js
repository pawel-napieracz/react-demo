import React from 'react';
import LoginBox from '../components/login/LoginBox';
import MsgBox from '../components/MsgBox';

export default class LoginPage extends React.Component {
  state = {};

  login(login, password) {
    console.log('ajax call', login, password);

    fetch(`https://virtserver.swaggerhub.com/react-demo/React-demo/1.0.2/token/${login}`)
        .then(function (response) {
          if (response.ok) {
            return response.json();
          }
          throw new Error(response.url + response.status);
        })
        .then(body => {
          sessionStorage.setItem('jwt', body.jwt)
          console.log('logged');
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
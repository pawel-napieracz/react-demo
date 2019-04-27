import React from 'react';
import {Button, Form, Input} from 'semantic-ui-react';

export default class LoginBox extends React.Component {
  state = {};

  onLoginInputBlur(event) {
    this.setState({login: event.target.value});
  }

  onPasswordInputBlur(event) {
    this.setState({password: event.target.value});
  }

  onSubmitBtnClicked() {
    console.log('called parent method');
    this.props.login(this.state.login, this.state.password);
  }

  render() {
    return (
        <Form>
          <Form.Field>
            <label>Username
              <Input onBlur={this.onLoginInputBlur.bind(this)}/>
            </label>
          </Form.Field>
          <Form.Field>
            <label>Password
              <Input onBlur={this.onPasswordInputBlur.bind(this)} type='password'/>
            </label>
          </Form.Field>
          <Button type='submit' onClick={this.onSubmitBtnClicked.bind(this)}>Sign in</Button>
        </Form>);
  }
}
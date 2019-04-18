import React from 'react';
import { Message } from 'semantic-ui-react'

export default class MsgBox extends React.Component {

  render() {
    return (
        <Message {...this.props.type}>
          <Message.Header>{this.props.title}</Message.Header>
          <p>{this.props.body}</p>
        </Message>
    );
  }
}
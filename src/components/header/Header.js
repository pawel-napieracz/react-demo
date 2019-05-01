import React from 'react';
import {Menu, Icon, Label} from 'semantic-ui-react';
import './Header.css';

export default class Header extends React.Component {
  state = {activeItem: 'home'};

  handleItemClick = (e, {name}) => this.setState({activeItem: name});

  render() {
    const {activeItem} = this.state;
    // Menu.Item with just an onClick isn't keyboard accessible because there's no href on the rendered link
    return (
        <Menu stackable>
          <Menu.Item>
            <img src='https://react.semantic-ui.com/logo.png' alt=''/>
          </Menu.Item>

          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}>Home</Menu.Item>

          <Menu.Menu position='right'>
            <Menu.Item name='cart' active={activeItem === 'cart'}>
              <div>
                <Icon name='cart' size='huge' aria-label='Number of items in cart:'/>
                <Label className='cart-label' color='red' floating>1</Label>
              </div>
            </Menu.Item>
            <Menu.Item name='sign-out' onClick={this.handleItemClick}>Sign-out</Menu.Item>
          </Menu.Menu>
        </Menu>
    )
  }
}
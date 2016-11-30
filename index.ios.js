import React, { Component, PropTypes } from 'react';
import SignUpScene from './SignUpScene';
import SignInScene from './SignInScene';
import {
  AppRegistry,
  NavigatorIOS,
} from 'react-native';

class AwesomeProject extends Component {
  render() {
    const routes = [
      {component: SignInScene, title: 'Sign In',navigationBarHidden: true, backButtonTitle: "Back"},
    ];
    return (
      <NavigatorIOS initialRoute={routes[0]} style={{flex: 1}}/>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);

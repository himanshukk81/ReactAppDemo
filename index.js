import { AppRegistry } from 'react-native';
import React, { Component } from 'react';
import App from './App';
import Routes from './Routes.js'
class AppComponent extends Component {
    render() {
       return (
          <Routes />
       )
    }
 }
 export default AppComponent
AppRegistry.registerComponent('DemoApp', () => AppComponent);

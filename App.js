/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, Image } from 'react-native';
import Detail from './Detail.js'
import List from './List.js'
import Routes from './Routes.js'
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// type Props = {};

export default class App extends Component {
  render() {
   
    return (
      <View>
            {/* <Home /> */}
            <Routes />
            <List />
      </View>
    );
  }
}


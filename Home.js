/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
    WebView,
    Dimensions
} from 'react-native';
import TWebView from "./TCompoent/TWebView";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

var width = Dimensions.get('window').width;

export default class Home extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
       <TWebView url='http://192.168.5.102:8081/htmls/nearBy.html' style={styles.wvstyle}/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
    wvstyle:{
    width:width,
        height:300,
    }
});

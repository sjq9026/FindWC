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
  View
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class Welcome extends Component<{}> {

    constructor(props){
        super(props);
        this.jumpAPPage=this.jumpAPPage.bind(this);
    }

    componentDidMount(){
        var that=this;
        this.timer=setInterval(function () {
            that.jumpAPPage();
        },3000);
    }

    jumpAPPage(){
        this.props.navigation.navigate('Tab');
        clearInterval(this.timer);
    }



  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          欢迎界面!
        </Text>
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
});

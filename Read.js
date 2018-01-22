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
    Dimensions,
    Image
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class Read extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
          {/*这个是searchlayout的布局*/}
        <View style={styles.searchLayout}>
          <View style={styles.input}>
            <Image source={require('./imgs/pb_search_contacts.png')} />
            <Text style={styles.hintStr}>请输入关键字</Text>
          </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
      flexDirection:'column',
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
    searchLayout:{
        flexDirection:'column',
        height:50,
        width:Dimensions.get('window').width,
        alignSelf:'center',
        justifyContent:'center'
    },
    input:{
        flexDirection:'row',
        height: 40,
        borderWidth: 1,
        marginLeft: 5,
        marginRight:5,
        paddingLeft: 5,
        borderColor: '#CCC',
        borderRadius: 4,
        marginTop:5,
        justifyContent:'center'
    },
    hintStr:{
        lineHeight:40,
        textAlign:'center',
        color:'gray'
    },
});

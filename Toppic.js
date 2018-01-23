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
    Image,

  View

} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class Toppic extends Component<{}> {
    constructor(props){
        super(props)
        this.state({
            data:this.props.data
        })
    }
  render() {

    return (



        <View style={styles.container}>


                    <View>
                        <Image  source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>

                    </View>
                <View>
                    <Image  source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>

                </View>







</View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
      container: {
        flex: 1,
      },
        con:{
          flexDirection:'row'
        },

});

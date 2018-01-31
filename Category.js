/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import ToppicEntity from './Entities/ToppicEntity';
import {
    Platform,
    StyleSheet,
    Text,
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


const  width = Dimensions.get("window").width;
const  toppics = [
    new ToppicEntity("http://img0.imgtn.bdimg.com/it/u=3519309645,3088241677&fm=27&gp=0.jpg"),
    new ToppicEntity("http://img4.imgtn.bdimg.com/it/u=876215035,4104840121&fm=27&gp=0.jpg")
]

export default class Category extends Component<{}> {
    constructor(props){
        super(props);
    }
  render() {

    return (
        <View style={styles.container} >
            <Text style={styles.str}>互联网那些事儿</Text>
            <Text style={styles.str}>互联网那些事儿</Text>
            <Text style={styles.str}>互联网那些事儿</Text>
            <Text style={styles.str}>互联网那些事儿aa</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
      container: {
         width:width,
         marginTop:20,
         flexDirection:'row',
         justifyContent:'space-around',
         flexWrap:'wrap',
      },
    str:{
        width:(Dimensions.get('window').width-30)/2,
        textAlign:'center',
        height:60,
        borderWidth:1,
        margin:5,
        borderColor:'red',
        lineHeight:60,
        borderRadius:5
    }





});

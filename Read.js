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
      Dimensions,
      Image,
      View,
    ScrollView
} from 'react-native';
import Toppic from "./Toppic";
import ToppicEntity from  "./Entities/ToppicEntity";
import Recommend from "./Recommend";
import Category from "./Category";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const  toppics = [
    new ToppicEntity("http://img0.imgtn.bdimg.com/it/u=3519309645,3088241677&fm=27&gp=0.jpg"),
    new ToppicEntity("http://img4.imgtn.bdimg.com/it/u=876215035,4104840121&fm=27&gp=0.jpg")
]

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
        <ScrollView >
            <Text style={styles.topStr}>推荐专题</Text>
            <Toppic style={{height:100}}/>
            <Text style={styles.topMore}>查看同期专题>></Text>
            <View style={styles.line}></View>
            <Recommend/>
            <Category/>
            <Text style={styles.topMore}>查看全部>></Text>
            <Text style={styles.topMore}>查看全部>></Text>
            <Text style={styles.topMore}>查看全部>></Text>
            <Text style={styles.topMore}>查看全部>></Text>
            <Text style={styles.topMore}>查看全部>></Text>
            <Text style={styles.topMore}>查看全部>></Text>
        </ScrollView>









      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },

  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },

    searchLayout:{
        height:50,
        width:Dimensions.get('window').width,
        alignSelf:'flex-start',
        justifyContent:'center',
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
    topStr:{
      paddingTop:5,
      paddingBottom:5,
      marginLeft:10,
      color:'black'
    },
    topMore:{
        paddingTop:5,
        paddingBottom:5,
        marginLeft:10,
        fontSize:12
    },
    line:{
      height:1,
      width:Dimensions.get('window').width,
      backgroundColor:'black'
    },

});

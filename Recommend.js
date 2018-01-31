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

export default class Recommend extends Component<{}> {
    constructor(props){
        super(props);
      /*  this.state={
            data:this.props.tops,
        }*/
    }
  render() {
        let views = [];
        for(let i=0;i<8;i++){
views.push(
    <View>
        <Image  style={styles.img} source={require("./imgs/3519309645.jpg")}/>
        <Text numberOfLines={2} style={styles.hintstr}>这里是图片的简介这里是图片的简介这里是图片的简介这里是图片的简介</Text>
    </View>


)
        }
    return (
        <View style={styles.container} >
            {views}
      </View>
    );
  }
}

const styles = StyleSheet.create({
      container: {
         width:width,

         flexDirection:'row',
         justifyContent:'space-around',
         flexWrap:'wrap',
      },
      img:{
          height:100,
          width:(width-30)/4,
          borderRadius:10,
          borderWidth:1,
          borderColor:'blue',
      },
    hintstr:{
        width:(width-30)/4,
        marginTop:5,
        marginBottom:5
    }




});

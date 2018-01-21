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

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

var width = Dimensions.get('window').width;

export default class TWebView extends Component<{}> {
  constructor(props){
    super(props);
    this.state={
      isError:false,
      url:this.props.url,
      }
      this._showError=this._showError.bind(this)
  }


  render() {
    return (
      <View style={styles.container}>
          {
              this._renderContent()


          }





      </View>
    );
  }

    _renderContent(){
        if(this.state.isError){
            return <Text>网址刷入有误，请检查后重试</Text>
        }else{
       return   <WebView   source={{uri:this.state.url}}
                           style={styles.wvstyle}
                           startInLoadingState={true}
                           onError={this._showError}

          />
        }
    }


    _showError(){
      this.setState({
          isError:true
      })
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

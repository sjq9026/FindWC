
import { AppRegistry,StyleSheet ,View,Image} from 'react-native';
import App from './App';
import {StackNavigator,TabNavigator} from 'react-navigation';
import React from 'react';


import {StackNavigator,TabNavigator} from 'react-navigation';

import Home from './Home';
import Read from './Read';
import Fun from './Fun';
import Mine from './Mine';
import Toppic from  './Toppic'
import Welcome from './Welcome';


const tabPages = TabNavigator(
    {
        Home:{
            screen:Home,
            navigationOptions: {
                tabBarLabel: 'FindWC',
                header:null,
                tabBarIcon: ({tintColor,focused}) => (
                    focused
                        ?
                        <Image
                            source={require('./imgs/tab_app_pressed.png')}
                            style={styles.icon}
                        />
                        :
                        <Image
                            source={require('./imgs/tab_app_normal.png')}
                            style={styles.icon}
                        />
                ),


            }
        },
        Read:{
            screen:Read,
            navigationOptions: {
                tabBarLabel: '阅读',
                header:null,
                tabBarIcon: ({tintColor,focused}) => (
                    focused
                        ?
                        <Image
                            source={require('./imgs/tab_report_pressed.png')}
                            style={styles.icon}
                        />
                        :
                        <Image
                            source={require('./imgs/tab_report_normal.png')}
                            style={styles.icon}
                        />
                ),
            }
        },
        Fun:{
            screen:Fun,
            navigationOptions: {
                tabBarLabel: '轻松一刻',

                tabBarIcon: ({tintColor,focused}) => (
                    focused
                        ?
                        <Image
                            source={require('./imgs/tab_daily_pressed.png')}
                            style={styles.icon}
                        />
                        :
                        <Image
                            source={require('./imgs/tab_daily_normal.png')}
                            style={styles.icon}
                        />
                ),

            }
        },
        Mine:{
            screen:Mine,
            navigationOptions: {
                tabBarLabel: '我的',
                tabBarIcon: ({tintColor,focused}) => (
                    focused
                        ?
                        <Image
                            source={require('./imgs/tab_mine_pressed.png')}
                            style={styles.icon}
                        />
                        :
                        <Image
                            source={require('./imgs/tab_mine_normal.png')}
                            style={styles.icon}
                        />
                ),
            }
        }
    },
    {
        animationEnabled: true,
        tabBarPosition: 'bottom',
        swipeEnabled: true,
        backBehavior: 'none',
        tabBarOptions: {

            activeTintColor: 'blue',
            inactiveTintColor: 'gray',
            showIcon:true,//是否显示图标
            showLabel:true,//是否显示文字
            indicatorStyle: {
                height: 0,
            },
            style:{
                backgroundColor:'transparent',
                height:60,
            },
            pressColor: 'gray',
            pressOpacity: 0.8,
            upperCaseLabel: false,
        },

    }
)

const tabPages = TabNavigator({
Home:{
    screen:Home
},
Read:{
    screen:Read
},
Fun:{
    screen:Fun
},
Mine:{
    screen:Mine
}


})





const pages = StackNavigator({

    Welcome:{
        screen:Welcome
    },
    Tab:{
        screen:tabPages
    }



})

const styles = StyleSheet.create({
    tabBarImage: {
        width: 24,
        height: 24,
    },
    tabBar: {
        backgroundColor: 'white',
    },
    tabBarLabel: {
        fontSize: 12,
    },
    tabBarItem: {
        height: 56,
    },
    icon: {
        width: 20,
        height: 20,
    },

Welcome:{
    screen:Welcome
},
Tab:{
    screen:tabPages   
},
    Toppic:{
        screen:Toppic
    }




})



AppRegistry.registerComponent('RNDemo2', () => Toppic);

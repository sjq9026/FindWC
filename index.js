import { AppRegistry } from 'react-native';
import App from './App';
import {StackNavigator,TabNavigator} from 'react-navigation';
import Home from './Home';
import Read from './Read';
import Fun from './Fun';
import Mine from './Mine';
import Welcome from './Welcome';

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



AppRegistry.registerComponent('RNDemo2', () => pages);

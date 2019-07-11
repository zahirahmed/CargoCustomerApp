import Splash from './Splash';
import Login from './Login';
import SignUp from './SignUp';
import HomeScreen from './HomeScreen';

import {StackNavigator} from 'react-navigation';

const AppNavigator = StackNavigator({
    //Screens
    Splash: {
        screen : Splash
    },
    Login: {
        screen: Login
    },  
    SignUp: {
        screen: SignUp
    },
    HomeScreen: {
        screen: HomeScreen
    },

}, {
    //Settings
    initialRouteName: 'Splash',
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
})

export default AppNavigator;
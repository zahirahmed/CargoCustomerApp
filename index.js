/**
 * @format
 */

import {AppRegistry} from 'react-native';
import AppStackNavigator from './components/AppStackNavigator'
import Splash from './components/Splash';
import Login from './components/Login';
import ChangePassword from './components/ChangePassword';
import ForgotPassword from './components/ForgotPassword';
import SignUp from './components/SignUp';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => AppStackNavigator);

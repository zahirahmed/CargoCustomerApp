/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Splash from './components/Splash';
import Login from './components/Login';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Login);

/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
const TestFairy = require('react-native-testfairy');

TestFairy.begin("5b3af35e59a1e074e2d50675b1b629306cf0cfbd");
AppRegistry.registerComponent(appName, () => App);

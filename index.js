import {AppRegistry, LogBox} from 'react-native';

import App from './App';

LogBox.ignoreLogs([
  'RCTBridge required dispatch_sync to load RCTDevLoadingView. This may lead to deadlocks',
]);

AppRegistry.registerComponent('DetoxCrash', () => App);

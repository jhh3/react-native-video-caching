import React from 'react';
import {
  createStackNavigator,
  createAppContainer,
} from "react-navigation";
import HomeScreen from './HomeScreen';
import NoCacheVideoScreen from './NoCacheVideoScreen';
import CacheVideoScreen from './CacheVideoScreen';
import CacheAndLoadingVideoScreen from './CacheAndLoadingVideoScreen';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
		NoCacheVideoScreen: NoCacheVideoScreen,
		CacheVideoScreen: CacheVideoScreen,
		CacheAndLoadingVideoScreen: CacheAndLoadingVideoScreen,
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(AppNavigator);

class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

export default App;

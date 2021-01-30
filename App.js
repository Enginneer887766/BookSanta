import React from 'react';
import {} from 'react-native';
import {createSwitchNavigator , createAppContainer} from 'react-navigation';
import {AppTabNavigator} from './components/tabNavigation';
import WelcomeScreen from './screens/welcomeScreen';

export default function App() {
  
    return(
      <AppNavigator/>
    )
  
}
const switchNavigator = createSwitchNavigator({
  WelcomeScreen: {screen : WelcomeScreen},
  TabNavigator : {screen : AppTabNavigator}
})

const AppNavigator = createAppContainer(switchNavigator)
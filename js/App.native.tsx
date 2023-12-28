/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './screen/WelcomeScreen';
import HomeScreen from './screen/HomeScreen';
import NativeModuleScreen from './screen/NativeModuleScreen';
import NativeComponentScreen from './screen/NativeComponentScreen';

const Stack = createNativeStackNavigator();

function App(): React.ReactElement {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='Welcome' component={WelcomeScreen} />
        <Stack.Screen name='NativeModule' component={NativeModuleScreen} />
        <Stack.Screen name='NativeComponent' component={NativeComponentScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

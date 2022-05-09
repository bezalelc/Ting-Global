/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
// import Header from './Components/Header';
//import type {Node} from 'react';
// import {SafeAreaView, StatusBar} from 'react-native';
import LoginPage from './Screens/LoginPage';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import HomePage from './Screens/HomePage';
import SignUp from './Screens/SignUp';
import CheckPage from './Screens/CheckPage';
import Tabs from './Components/Tabs';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoginPage"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="HomePage" component={Tabs} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="CheckPage" component={CheckPage} />
        {/*<StatusBar />*/}
        {/*<LoginPage />*/}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

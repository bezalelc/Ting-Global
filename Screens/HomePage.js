import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import LoginPage from './LoginPage';
import {page} from 'yarn/lib/cli';
//import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const Page = () => {
  return (
    <View name={'body'} style={styleHomePage.body}>
      <View name={'TopOfPage'} style={styleHomePage.top}>
        <Image
          source={require('../Images/User.png')}
          style={styleHomePage.image}
        />
        <Image
          source={require('../Images/newGlobus.png')}
          style={styleHomePage.image}
        />
      </View>
      <View name={'FirstTable'}>
        <Text style={styleHomePage.text}>
          {'\n\t\t'}Table{'\n'}
        </Text>
      </View>
      <View name={'Comments'}>
        <Text style={styleHomePage.text}>
          {'\n\t\t'}Comments{'\n'}
        </Text>
      </View>
      <View name={'Achievements'}>
        <Text style={styleHomePage.text}>
          {'\n\t\t'}Achievements{'\n'}
        </Text>
      </View>
      {/* eslint-disable-next-line react-native/no-inline-styles */}
      <View name={'NavBar'} style={{height: 50}}>
        <Tab.Navigator
          initialRouteName="LoginPage"
          screenOptions={{
            tabBarActiveTintColor: '#e91e63',
          }}>
          <Tab.Screen name="Profile" component={LoginPage} />
          <Tab.Screen name="Chat" component={LoginPage} />
          <Tab.Screen name="Actions" component={LoginPage} />
          <Tab.Screen name="International" component={LoginPage} />
          <Tab.Screen name="accomplishments" component={LoginPage} />
        </Tab.Navigator>
      </View>
    </View>
  );
};
const styleHomePage = StyleSheet.create({
  image: {
    justifyContent: 'flex-start',
    width: 70,
    height: 70,
  },
  top: {
    backgroundColor: 'rgba(158,171,206,0.97)',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  body: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
  },
});
export default Page;

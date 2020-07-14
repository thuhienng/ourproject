/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import Home from './components/Home';
import Journal from './components/Journal';
import Profile from './components/Profile';
import Signin from './components/Signin';

const Tab = createBottomTabNavigator();

class App extends Component{
    static navigationOptions = {
    headerShown: false,
  }
  render(){
    return(
      <>
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="Home" 
            activeColor="#93b8e9"
            inactiveColor="#a0a1a6"
            barStyle={{ backgroundColor: "#35373b",  height: 80 }}>
            <Tab.Screen 
              name="Home"
              component={Home}
              options={{
                tabBarIcon: ({color}) => (
                  <FontAwesome name="home" size={25} color={color}/>
                )
              }}
            />
            <Tab.Screen 
              name="Journal"
              component={Journal}
              options={{
                tabBarIcon: ({color}) => (
                  <FontAwesome name="book" size={25} color={color}/>
                )
              }}
            />
            <Tab.Screen 
              name="Profile"
              component={Profile}
              options={{
                tabBarIcon: ({color}) => (
                  <FontAwesome name="id-card" size={25} color={color}/>
                )
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </>
    )
  }
}

export default App;

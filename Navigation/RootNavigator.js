import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginStackNavigator from './LoginStackNavigator.js';
import MainDrawerNavigator from '../Navigation/MainDrawerNavigator';
import BottomNavigation from '../Navigation/BottomNavigation'
const Stack = createStackNavigator();

export default function RootNavigator() {

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode='none'>
        <Stack.Screen name="LoginStackNavigator" component={LoginStackNavigator} />
        <Stack.Screen name='MainDrawerNavigator' component={MainDrawerNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


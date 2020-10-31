import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {AntDesign} from '@expo/vector-icons';
import Home from '../screens/HomeScreen'
// import Post from '../screens/PostStoryScreen'
import Products from '../screens/ProductsScreen';
import Search from '../screens/Search';
import CartScreen from '../screens/CartScreen';
import ViewItems from '../screens/ViewItems';


const Tab = createMaterialBottomTabNavigator();

export default function BottomNavigation() {



  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#5cd6d6"
      style={{ backgroundColor: 'tomato' }}
      barStyle={{ backgroundColor: 'white' }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          // tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" color={color} size={26} />

          ),
      
          
        }}
      />
       <Tab.Screen
        name="Search"
        activeColor="#5cd6d6"

        component={ViewItems}
        options={{
          // tabBarLabel: 'Search',
          tabBarIcon: ({ color }) => (
            <AntDesign name="search1" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        activeColor="#5cd6d6"


        component={CartScreen}
        options={{
          // tabBarLabel: 'Cart',
          tabBarIcon: ({ color }) => (
            <AntDesign name="shoppingcart" color={color} size={26} />
          ),
        }}
      /> 
    </Tab.Navigator>
  );

}


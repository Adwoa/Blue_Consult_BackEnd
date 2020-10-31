import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import LinkCardsScreen from '../screens/LinkCardsScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
import ProductsScreen from '../screens/ProductsScreen';
// import TablesScreen from '../screens/CartScreen';
// import Card from '../screens/Cards';
// import Tables from '../screens/TablesScreen';
import FurnitureScreen from '../screens/FurnitureScreen';
import PaymentScreen from '../screens/PaymentScreen';
import CartScreen from '../screens/CartScreen';
import ViewItems from '../screens/ViewItems';
// import ForgetPassword from '../screens/ForgetPassword';
import TablesScreen from '../screens/TablesScreen';
import SignoutScreen from '../screens/SignoutScreen';





// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


const Drawer = createDrawerNavigator();

export default function MainDrawerNavigator() {

    return (
        <Drawer.Navigator
            initialRouteName="Home"
            drawerPosition="left">
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="ViewItems" component={ViewItems} />
            <Drawer.Screen name="Product Description" component={CartScreen} />

            {/* <Drawer.Screen name="Cards" component={LinkCards} /> */}
            {/* <Drawer.Screen name="Register" component={Register} /> */}
            <Drawer.Screen name="Products" component={ProductsScreen} />
            <Drawer.Screen name="Cart" component={PaymentScreen} />
            <Drawer.Screen name="SignoutScreen" component={SignoutScreen} />

            {/* <Drawer.Screen name="Card" component={Cards} /> */}
            {/* <Drawer.Screen name="ForgetPassword" component={ForgetPassword} /> */}
            {/* <Drawer.Screen name="TablesScreen" component={TablesScreen} /> */}
            {/* <Drawer.Screen name="Furniture" component={FurnitureScreen} /> */}





        </Drawer.Navigator>
    );
}


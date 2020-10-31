import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import LinkCardsScreen from '../screens/LinkCardsScreen';
import Register from '../screens/RegistrationScreen';
// import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import HomeScreen from '../screens/HomeScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import ProductsScreen from '../screens/ProductsScreen';
import Cards from '../screens/Cards';
import LogsScreen from '../screens/LogsScreen';
import ForgetPassword from '../screens/ForgetPassword';
import Recovery from '../screens/Recovery';
import Reset from '../screens/Reset';
import SignoutScreen from '../screens/SignoutScreen';



const Stack = createStackNavigator();

export default function LoginStackNavigator() {


    return (
        <Stack.Navigator headerMode='none'>
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="LogsScreen" component={LogsScreen} />
            <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
            <Stack.Screen name="Recovery" component={Recovery} />
            <Stack.Screen name="Reset" component={Reset} />

            <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
            <Stack.Screen name="LinkCardsScreen" component={LinkCardsScreen} />
            <Stack.Screen name="Cards" component={Cards} />
            <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} />
            <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
            <Stack.Screen name="SignoutScreen" component={SignoutScreen} />

            
            {/* <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="Products" component={ProductsScreen} /> */}


            {/* <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} /> */}
            {/* <Stack.Screen name="HomeScreen" component={HomeScreen} /> */}
        </Stack.Navigator>
    );
}


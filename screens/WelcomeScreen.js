import React, { Component } from 'react';
import { Text, View, Image, Alert} from 'react-native';
import { Button } from 'native-base';
// import { StackNavigator } from "react-navigation";


export default class WelcomeScreen extends Component {
    render() {
        return (
            <View>
                <View style={{ marginBottom: 20, paddingLeft: 110, paddingTop: '35%' }}>
                    <Image source={require('../assets/logo.jpg')}
                        style={{ width: 100, alignContent: "center", height: 100, borderRadius: 100, alignSelf: 'left', padding: 80, resizeMode: 'contain' }} />
                </View>
                <View style={{ alignItems: 'center', }} >
                    <Text style={{ paddingTop: 60, fontWeight: 'bold', fontSize: 25, fontStyle: 'italic', }}>WELCOME!</Text>
                </View>
                <View style={{ paddingTop: 30, }}>
                    <Button
                        onPress={() =>{
                            Alert.alert(
                                'You have successfully logged in!',
                                'CONGRATULATIONS!!',
                                [
                                  {
                                    text: 'OK',
                                    onPress: () => this.props.navigation.navigate('MainDrawerNavigator'),
                                    style: 'cancel'
                                  },
                                //   { text: 'OK', onPress: () => this.props.navigation.navigate('MainDrawerNavigator')}
                                ],
                                { cancelable: false }
                              );
                              
                            
                        }
                            

                        }
                        block dark style={{ width: "75%", alignSelf: "center", justifyContent: 'center', borderRadius: 10 }}>
                        <Text style={{ fontWeight: '100', color: 'white' }}>CONTINUE</Text>
                    </Button>
                </View>
            </View>
        )
    }
}

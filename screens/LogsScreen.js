import React, { Component } from 'react';
import { View, ImageBackground, Image } from 'react-native';
import { Item, Input, Button, Text, Icon, Toast } from 'native-base';
import axios from 'axios'



export default class LogsScreen extends Component {

    state = {
        email: "heyphord@gmail.com",
        password: "223344",

    };

    onLogin = (props) => {
        if (this.state.email == "" ) {

            Toast.show({
                text: "Please enter correct credentials!",
                position: 'top',
                buttonText: "Okay",
            })

            return
        }
        else if (this.state.password == ""){
            Toast.show({
                text: "Please enter correct credentials!",
                position: 'top',
                buttonText: "Okay",
            })
            return
        }
        
        axios.post('http://localhost:5000/user/login', {
            email: this.state.email,
            password: this.state.password
        })
            .then(function (response) {
                if(response.data.error==true){
                    Toast.show({
                        text: "Please enter correct credentials!",
                        position: 'top',
                        buttonText: "Okay",
                    })
                    return
                }
                console.log(response);
                props.navigation.navigate('MainDrawerNavigator')
            })
            .catch(function (error) {

                if (error.response) {

                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log(error.response);
                    
                } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                }
                console.log(error.config);
            });


    }

    render() {
        return (
            <View>
                <ImageBackground
                    source={require('../assets/wood3.jpeg')}
                    style={{ height: '100%', justifyContent: 'flex-end' }}>

                    {/* <View style={{ marginLeft: '12%', marginBottom: '30%' }}>
            <Text style={{ fontSize: 70, color: 'gold', fontFamily: 'dancingScript' }}>
              Blue Consult
              </Text>
          </View> */}

                    <View style={{ backgroundColor: 'rgba(0,0,0,.3)', height: '100%', paddingTop: '49%' }}>

                        <View style={{ marginBottom: 40, paddingLeft: 140, }}>
                            <Image source={require('../assets/logo.jpg')}
                                style={{ width: 40, alignContent: "center", height: 40, borderRadius: 100, alignSelf: 'left', padding: 60, resizeMode: 'contain' }} />
                        </View>

                        <View style={{ marginBottom: "8%", paddingLeft: 10, marginHorizontal: 30 }}>
                            <Item>
                                <Icon active type='Feather' name='user' style={{ color: 'white' }} />
                                <Input placeholder='email' style={{ color: 'white' }} value={this.state.email} onChangeText={(text) => {
                                    this.setState({ email: text });
                                    console.log(this.state.email);
                                }
                                } />
                            </Item>
                        </View>

                        <View style={{ marginBottom: 4, paddingLeft: 10, justifyContent: 'center', alignItems: 'center', marginHorizontal: 30 }}>
                            <Item>
                                <Icon active type='Feather' name='lock' style={{ color: 'white' }} />
                                <Input placeholder='Password' style={{ color: 'white' }} value={this.state.password} onChangeText={(text) => { this.setState({ password: text }) }} />
                            </Item>
                        </View>

                        <View >
                            <Button transparent
                                onPress={() => this.props.navigation.navigate('ForgetPassword')}

                            >
                                <Text
                                    style={{ alignItems: 'flex-end', paddingLeft: 240, color: '#fff' }}>Forgot password?</Text>
                            </Button>
                        </View>


                        <View style={{ margin: '10%', alignItems: 'center', justifyContent: 'center', }}>
                            <Button
                                // onPress={() => this.props.navigation.navigate('MainDrawerNavigator')}
                                onPress={() => this.onLogin(this.props)}
                                block dark style={{ width: "75%", alignSelf: "center", justifyContent: 'center', borderRadius: 10 }}>
                                <Text>Login</Text>
                            </Button>
                        </View>
                    </View>
                </ImageBackground>


            </View>
        )
    }
}

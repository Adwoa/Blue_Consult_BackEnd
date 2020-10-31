import React, { Component } from 'react';
import { View, ImageBackground, Image } from 'react-native';
import { Item, Input, Button, Text, Icon } from 'native-base';
import axios from 'axios'


export default class Reset extends Component {

    state={
        old_password:"",
        new_password:"",

    };

    onReset = ( )=>{

        axios.post('http://localhost:5000/user/change-password', {
            old_password: this.state.old_password,
            new_password: this.state.new_password
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        

    }


    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View>
                <ImageBackground
                    source={require('../assets/loll.jpeg')}
                    style={{ height: '100ex%', justifyContent: 'flex-end' }}>

                    {/* <View style={{ marginLeft: '12%', marginBottom: '30%' }}>
            <Text style={{ fontSize: 70, color: 'gold', fontFamily: 'dancingScript' }}>
              Blue Consult
              </Text>
          </View> */}

                    <View style={{ backgroundColor: 'rgba(0,0,0,.5)', height: '100%', paddingTop: '49%', justifyContent: 'center' }}>

                        <View style={{ marginBottom: 20, paddingLeft: 140, }}>
                            <Image source={require('../assets/logo.jpg')}
                                style={{ width: 50, alignContent: "center", height: 50, borderRadius: 100, alignSelf: 'left', padding: 60, resizeMode: 'contain' }} />
                        </View>

                       

                        <View style={{ marginBottom: "8%", paddingLeft: 10, marginHorizontal: 30 }}>
                            <Item>
                                <Icon active type='Feather' name='lock' />
                                <Input placeholder='Password' style={{color:'white'}} />
                            </Item>
                        </View>

                        <View style={{ marginBottom: "19%", paddingLeft: 10, marginHorizontal: 30, color:'white' }}>
                            <Item>
                                <Icon active type='Feather' name='lock' />
                                <Input placeholder='Confirm Password'  />
                            </Item>
                        </View>

                       

                        <View style={{ marginBottom: '10%', alignItems: 'center', justifyContent: 'center', }}>
                            <Button
                                // onPress={() => this.props.navigation.navigate('BottomNavigation')}
                                onPress={() => this.onReset()}
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

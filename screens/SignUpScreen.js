import React, { Component } from 'react';
import { View, ImageBackground, Image } from 'react-native';
import { Item, Input, Button, Text, Icon } from 'native-base';
import axios from 'axios'




export default class SignUpScreen extends Component {

  

onSignup = ( )=>{

  axios.post('http://localhost:5000/user/register', {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      phone: this.state.phone,
      email: this.state.email,
      password: this.state.password,
      address: this.state.address 
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
          source={require('../assets/wood3.jpeg')}
          style={{ height: '100ex%', justifyContent: 'flex-end' }}>

          {/* <View style={{ marginLeft: '12%', marginBottom: '30%' }}>
            <Text style={{ fontSize: 70, color: 'gold', fontFamily: 'dancingScript' }}>
              Blue Consult
              </Text>
          </View> */}

          <View style={{backgroundColor:'rgba(0,0,0,.5)', height: '100%', paddingTop: '49%', justifyContent:'center'}}>

            <View style={{ marginBottom: 20, paddingLeft:140, }}>
              <Image source={require('../assets/logo.jpg')}
                style={{ width: 50, alignContent: "center",  height: 50, borderRadius: 100, alignSelf: 'left', padding: 60, resizeMode: 'contain' }} />
            </View>

            <View style={{ marginBottom: "8%", paddingLeft: 10, marginHorizontal:30 }}>
              <Item>
                <Icon active type='Feather' name='user' />
                <Input placeholder='Username' />
              </Item>
            </View>

            <View style={{ marginBottom: "8%", paddingLeft: 10, marginHorizontal:30 }}>
              <Item>
                <Icon active type='Feather' name='lock' />
                <Input placeholder='Email' />
              </Item>
            </View>

            <View style={{ marginBottom: "19%", paddingLeft: 10 , marginHorizontal:30}}>
              <Item>
                <Icon active type='Feather' name='lock' />
                <Input placeholder='Password' />
              </Item>
            </View>

            

            <View style={{ marginBottom: '5%', alignItems: 'center', justifyContent: 'center', }}>
              <Button
                onPress={() => this.props.navigation.navigate('LinkCardsScreen')}
                block dark style={{ width: "75%", alignSelf: "center", justifyContent: 'center', borderRadius: 10 }}>
                <Text>Continue</Text>
              </Button>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: '5%', marginHorizontal: '10%' }}>
              <View style={{ flex: 6, borderWidth: .5, borderColor: 'grey' }}>

              </View>
              <View style={{ marginHorizontal: '3%' }} >
                <Text>
                  or
              </Text>
              </View>
              <View style={{ flex: 6, borderWidth: .5, borderColor: 'grey' }}>

              </View>
            </View>

            <View style={{ marginBottom: '10%', alignItems: 'center', justifyContent: 'center', }}>
              <Button
                onPress={() => this.props.navigation.navigate('LogsScreen')}
                block dark style={{ width: "75%", alignSelf: "center", justifyContent: 'center', borderRadius: 10 }}>
                <Text>Login</Text>
              </Button>
            </View>
          </View>
        </ImageBackground>


      </View>
    );
  }
}

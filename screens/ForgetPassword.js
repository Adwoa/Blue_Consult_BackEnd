import React, { Component } from 'react';
import { View, ImageBackground, Image } from 'react-native';
import { Item, Input, Button, Text, Icon } from 'native-base';


export default class ForgetPassword extends Component {
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

            <View style={{ alignItems: 'center', fontFamily: 'dancingScript', paddingBottom: 20 }}>
              <Text style={{ alignContent: 'center', paddingBottom:10,color: 'white', fontSize: 25, fontFamily: 'dancingScript' }}>
                Forgot Your Password?
            </Text>
              <Text style={{ alignContent: 'center', color: 'white', fontFamily: 'dancingScript' }}>
                Enter your email below to receive password reset instruction!
            </Text>
            </View>

            <View style={{ marginBottom: "8%", paddingLeft: 10, marginHorizontal: 30 }}>
              <Item>
                <Icon active type='Feather' name='user' />
                <Input placeholder='Please enter email' />
              </Item>
            </View>





            <View style={{ marginBottom: '5%', alignItems: 'center', justifyContent: 'center', }}>
              <Button
                onPress={() => this.props.navigation.navigate('Recovery')}
                block dark style={{ width: "75%", alignSelf: "center", justifyContent: 'center', borderRadius: 10 }}>
                <Text>Send</Text>
              </Button>
            </View>




          </View>
        </ImageBackground>


      </View>
    )
  }
}

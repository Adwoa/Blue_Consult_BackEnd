import React, { Component } from 'react';
import { View, ImageBackground, Image } from 'react-native';
import {Item, Input, Button,Text,   } from 'native-base';
import { TextInput, TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
// import { Button } from 'react-native-elements';


export default class LoginScreen extends Component {
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
          style={{ height: '100%', justifyContent: 'flex-end' }}>
        
        <View style={{backgroundColor:'rgba(0,0,0,.5)', height: '100%', paddingTop: '73%'}}>

        <View style={{ marginBottom: 20, paddingLeft:110, }}>
              <Image source={require('../assets/logo.jpg')}
                style={{ width: 30, alignContent: "center",  height: 30, borderRadius: '100%', alignSelf: 'left', padding: 80, resizeMode: 'contain' }} />
        </View>

          <View style={{marginLeft:'12%', marginBottom:'5%'}}>  
              <Text style={{fontSize:57 ,paddingLeft: '6%', color:'#ffff99', fontFamily:'dancingScript'}}> 
                Blue Consult
              </Text>
          </View>

          <View>
          <Text style={{ marginBottom:'15%', paddingLeft: '30%' ,color:'#ffffff', fontFamily:'dancingScript' }}>
                  Welcome to the Blue App!
                  </Text>
          </View>
          
        <View style={{flexDirection: "row", paddingLeft:25}}> 
          <View style={{  marginBottom:'15%', alignItems:'center', justifyContent: 'center',}}>
          <Button 
          onPress={() => this.props.navigation.navigate('LogsScreen')}
          block light style={{width:"75%", backgroundColor:'#ffffe6', alignSelf:"center", justifyContent:'center', borderRadius:10}}>
            <Text>Login</Text>
          </Button>
          </View>

          <View style={{  marginBottom:'15%', alignItems:'center', justifyContent: 'center', }}>
          <Button 
           onPress={() => this.props.navigation.navigate('SignUpScreen')}
            block light style={{width:"75%", alignSelf:"center", justifyContent:'center',backgroundColor:'#ffffe6', borderRadius:10}}>
            <Text>Sign Up</Text>
          </Button>
          </View>
        </View>

        </View>
        </ImageBackground>
      </View>

    );
  }
}

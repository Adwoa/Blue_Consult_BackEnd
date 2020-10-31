import React, { Component } from 'react';
import { View, ImageBackground, Image } from 'react-native';
import { Item, Input, Button, Text, Icon } from 'native-base';

export default class Recovery extends Component {
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
                            <Image source={{ uri: 'https://images.unsplash.com/photo-1581438395625-215c5c2c6f2e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60' }}
                                style={{ width: 70, alignContent: "center", height: 70, borderRadius: 100, alignSelf: 'left', padding: 60, resizeMode: 'contain' }} />
                        </View>

                        <View style={{ alignItems: 'center', fontFamily: 'dancingScript', paddingBottom: 20 }}>
                            <Text style={{ alignContent: 'center', color: 'white', fontSize: 25, fontFamily: 'dancingScript' }}>
                                Please check your Mail!!
                                       </Text>

                        </View>

                       





                        <View style={{ marginBottom: '5%', alignItems: 'center', justifyContent: 'center', }}>
                            <Button
                                onPress={() => this.props.navigation.navigate('Reset')}
                                block dark style={{ width: "75%", alignSelf: "center", justifyContent: 'center', borderRadius: 10 }}>
                                <Text>Continue</Text>
                            </Button>
                        </View>




                    </View>
                </ImageBackground>


            </View>
        )
    }
}

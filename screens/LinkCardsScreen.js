import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { Container, Header, Left, Body, Input, Right, Button, Icon, Title, Content } from 'native-base';
import { TextInput, TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';



export default class LinkCardsScreen extends Component {
    render() {
        return (

            <Container style={{ flex: 1, }}>

                <Header transparent>

                    <Body >
                        <Title style={{ color: '#000000', paddingLeft:30 }}>REGISTER</Title>
                    </Body>
                    <Right >
                        <Button transparent onPress={() => this.props.navigation.navigate('LoginScreen')}>
                            <Icon type='AntDesign' name='close' style={{ background: '#000000', color: '' }} />
                        </Button>
                    </Right>
                </Header>
                <Content style={{ flex: 2 }}>
                    <View>
                        <Image source={require('../assets/cc1.jpeg')} style={{ width: '100%', height: 350 }} />
                    </View>
                    <View>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', fontFamily: 'dancingScript-bold', paddingLeft: 39, paddingTop: 10 }}>Have the Blue Advantage card?</Text>
                        <Text style={{ fontSize: 15, fontWeight: '100', textAlign: 'center', fontFamily: 'dancingScript-bold', padding: 20, paddingTop: 10 }}>
                            If yes, please link your card or your credit card to your digital profile.</Text>
                        <View style={{paddingBottom:20, paddingTop:30}}>
                        <Button
                            onPress={() => this.props.navigation.navigate('Cards')}
                            block dark style={{ width: "75%", alignSelf: "center", justifyContent: 'center', borderRadius: 10 ,}}>
                            <Text style={{fontWeight:'bold', color:'white'}}>LINK YOUR CARDS</Text>
                        </Button>
                        </View>
                        <View>
                        <Button
                            onPress={() => this.props.navigation.navigate('RegistrationScreen')}
                            block dark style={{ width: "75%", alignSelf: "center", justifyContent: 'center', borderRadius: 10 }}>
                            <Text style={{fontWeight:'100', color:'white'}}>SKIP THIS STEP FOR NOW</Text>
                        </Button>
                        </View>
                    </View>
                </Content>
            </Container>

        )
    }
}

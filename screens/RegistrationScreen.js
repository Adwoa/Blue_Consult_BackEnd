import React, { Component } from 'react'
import { View, Item, Container, Header, Title, Content, Button, Toast, Input, Icon, Left, Right, Body, Text } from "native-base";
// import { StackNavigator } from "react-navigation";
import axios from 'axios'



export default class RegistrationScreen extends Component {

    state = {
        first_name: "",
        last_name: "",
        phone: "",
        email: "",
        password: "",
        address: ""

    };

    onRegistration = (props) => {

        if (this.state.first_name == "" || this.state.last_name == "" || this.state.phone == "" || this.state.email == "" || this.state.password == "" || this.state.address == "") {

            Toast.show({
                text: "Empty field!",
                position: 'top',
                buttonText: "Okay",
            })

            return
        }


        axios.post('http://localhost:5000/user/register', {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            phone: this.state.phone,
            email: this.state.email,
            password: this.state.password,
            address: this.state.address
        })
            .then(function (response) {
                if (response.data.error == true) {
                    Toast.show({
                        text: "Error!",
                        position: 'top',
                        buttonText: "Okay",
                    })
                    return
                }
                console.log(response);
                props.navigation.navigate('WelcomeScreen')

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
            <Container >
                <Header transparent>
                    <Body>
                        <Title style={{ color: '#000000', paddingLeft: 30 }}>REGISTER</Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={() => this.props.navigation.navigate('LoginScreen')}>
                            <Icon type='AntDesign' name='close' style={{ background: '#000000', color: '' }} />
                        </Button>
                    </Right>
                </Header>

                <Content contentContainerStyle={{ alignItems: 'center', borderTopWidth: '1%' }}>
                    <View style={{ marginBottom: "8%", width: '80%', alignSelf: 'center' }}>
                        <Item >
                            {/* <Icon active type='Feather' name='user' /> */}
                            <Input placeholder='First name' value={this.state.first_name} onChangeText={(text) => { this.setState({ first_name: text }) }} />
                        </Item>
                    </View>

                    <View style={{ marginBottom: "8%", width: '80%', alignSelf: 'center' }}>
                        <Item>
                            {/* <Icon active type='Feather' name='lock' /> */}
                            <Input placeholder='Surname' value={this.state.last_name} onChangeText={(text) => { this.setState({ last_name: text }) }} />
                        </Item>
                    </View>

                    <View style={{ marginBottom: "8%", width: '80%', alignSelf: 'center' }}>
                        <Item>
                            {/* <Icon active type='Feather' name='lock' /> */}
                            <Input placeholder='Contact number' value={this.state.phone} onChangeText={(text) => { this.setState({ phone: text }) }} />
                        </Item>
                    </View>

                    <View style={{ marginBottom: "8%", width: '80%', alignSelf: 'center' }}>
                        <Item>
                            {/* <Icon active type='Feather' name='lock' /> */}
                            <Input placeholder='Email' value={this.state.email} onChangeText={(text) => { this.setState({ email: text }) }} />
                        </Item>
                    </View>

                    <View style={{ marginBottom: "8%", width: '80%', alignSelf: 'center' }}>
                        <Item>
                            {/* <Icon active type='Feather' name='lock' /> */}
                            <Input placeholder='Password' value={this.state.password} onChangeText={(text) => { this.setState({ password: text }) }} />
                        </Item>
                    </View>

                    <View style={{ marginBottom: "15%", width: '80%', alignSelf: 'center' }}>
                        <Item>
                            {/* <Icon active type='Feather' name='lock' /> */}
                            <Input placeholder='Address' value={this.state.address} onChangeText={(text) => { this.setState({ address: text }) }} />
                        </Item>
                    </View>
                    <Button
                        // onPress={() => this.props.navigation.navigate('WelcomeScreen')}
                        onPress={() => this.onRegistration(this.props)}
                        block dark style={{ width: "75%", alignSelf: "center", justifyContent: 'center', borderRadius: 10 }}>
                        <Text style={{ fontWeight: '100', color: 'white' }}>REGISTER</Text>
                    </Button>
                </Content>
            </Container>
        )
    }
}

import React, { Component } from "react";
import { View } from "react-native";
import { Container, Header, Button, Content, ActionSheet, Text, Icon, Left } from "native-base";
var BUTTONS = ["Visa", "Master Card", "Mobile Money", "Cancel"];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;
export default class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Container>
                <Header
                    style={{ width: '100%', backgroundColor: '#003366' }}>


                    <View style={{ height: 90, }}>
                        <Text style={{ fontSize: 35, textAlign: 'center', color: 'white', paddingBottom: 40, fontWeight: 'bold', paddingBottom: 10, fontFamily: 'dancingScriptB' }}>Blue Consult</Text>
                    </View>

                </Header>
                <Content padder>
                    <Button transparent

                        onPress={() =>
                            ActionSheet.show(
                                {
                                    options: BUTTONS,
                                    cancelButtonIndex: CANCEL_INDEX,
                                    destructiveButtonIndex: DESTRUCTIVE_INDEX,
                                    title: "Mode Of Transaction"
                                },
                                buttonIndex => {
                                    this.setState({ clicked: BUTTONS[buttonIndex] });
                                }
                            )}
                    >
                        <Text style={{ color: '#003333', fontFamily: 'dancingScript', fontSize: 25 }}>Click to Select Mode of Payment</Text>
                    </Button>
                    <View style={{paddingTop:'80%', marginHorizontal:'40%'}}>
                        <Button light 
                                                        onPress={() => this.props.navigation.navigate('RegistrationScreen')}

                        >
                            <Text style={{fontFamily:'dancingScript'}}>
                                DONE
                                </Text>
                        </Button>
                    </View>
                </Content>
            </Container>
        );
    }
}
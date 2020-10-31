import React, { Component } from 'react'
import { Text, View ,TouchableOpacity,} from 'react-native'
import { Container, Header, Left, Button, Body, Icon, Title, Right } from 'native-base'

export default class FurnitureScreen extends Component {
    render() {
        return (
            <Container>
                <Header style={{ alignItems: 'center', backgroundColor: 'black', justifyContent: 'center' }}>

                    <Body>
                        <Title style={{ color: 'white', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '18', fontFamily: 'dancingScript' }}>BLUE CONSULT</Title>
                    </Body>
                    <Right>
                        <Button
                            hasText transparent
                            onPress={() => this.props.navigation.navigate('HomeScreen')}
                        >
                            <Text style={{ color: 'white', fontWeight: 'bold', paddingLeft: 50, fontSize: '18', fontFamily: 'dancingScript' }}>Cancel</Text>
                        </Button>
                    </Right>
                </Header>
            </Container>
        )
    }
}

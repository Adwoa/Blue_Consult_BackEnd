import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class SignoutScreen extends Component {

    constructor(){
        super()
    }

    
    componentDidMount(){
        this.props.navigation.navigate('LoginStackNavigator')

    }
    render() {
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        )
    }
}

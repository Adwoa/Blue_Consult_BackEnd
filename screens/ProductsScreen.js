
import React, { Component } from 'react';
import { Text, View, ImageBackground } from 'react-native';
import { Drawer, Content, Item, Icon, Header, Input, Button } from 'native-base';


export default class Page1 extends Component {
    render() {
        return (
            <View>
                <ImageBackground
                    source={{ uri: 'https://images.unsplash.com/photo-1533630654593-b222d5d44449?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60' }}
                    style={{ height: '100%', }}>

                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <Icon name="menu" style={{ color: 'white', paddingLeft: 15, paddingTop: 32 }}
                            onPress={() => this.props.navigation.toggleDrawer()} />
                        <Icon name="cart" style={{ color: 'white', paddingLeft: 15,margin:10, paddingTop: 32 }} />

                    </View>
                </ImageBackground>
            </View>
        )
    }
}

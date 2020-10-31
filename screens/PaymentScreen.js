import React, { Component } from 'react';
import { Text, View, Image, Dimensions, ImageBackground, TouchableOpacity, FlatList } from 'react-native';
import { Container, Header, Content, Button, Left, Right, Item, Input, Icon, Body, Tab, Tabs, ScrollableTab, Title } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';



const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 44 : 20) : 0;
const HEADER_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 88 : 64) : 64;
const NAV_BAR_HEIGHT = HEADER_HEIGHT - STATUS_BAR_HEIGHT;

const stories = [
    {
        id: 9,
        image: 'https://images.unsplash.com/photo-1592923750193-0caa23a10e1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        name: 'JHGJHGJGCKujhku',
        price: '$1099.99',
        discount: '40% discount'

    },
    {
        id: 10,
        image: 'https://images.unsplash.com/photo-1592923750193-0caa23a10e1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        name: 'JHGJHGJGCKujhku',
        price: '$770.88',
        discount: '20% discount'

    },
    {
        id: 11,
        image: 'https://images.unsplash.com/photo-1592923750193-0caa23a10e1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        name: 'JHGJHGJGCKujhku',
        price: '$940',
        discount: '50% discount'

    },
    {
        id: 12,
        image: 'https://images.unsplash.com/photo-1592923750193-0caa23a10e1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        name: 'JHGJHGJGCKujhku',
        price: '$190',
        discount: '90% discount'

    },
]

export default class ViewItems extends Component {
    render() {
        return (

            <ImageBackground
                // source={{ uri: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60' }}
                style={{ width: '100%', height: '40%', backgroundColor: '#003366', }}>

                <View style={{ flexDirection: 'row', paddingTop: 48, alignItems: 'center', marginHorizontal: 20, paddingBottom: 30 }}>

                    <Left transparent >
                        {/* <Icon name="arrow-back" style={{ color: "#fff" }} /> */}
                        <Icon name="menu" style={{ color: 'white' }}
                            onPress={() => this.props.navigation.toggleDrawer()} />
                    </Left>
                    <Text style={{ color: '#ffffff', fontSize: 30, paddingLeft: 40, fontFamily: 'dancingScript' }}>Blue Consult</Text>
                    {/* <Icon name="menu" style={{ color: 'white' }} /> */}

                    <Right>
                    <Icon name="cart" style={{ color: 'white', paddingLeft: 15,  }} />
                </Right>

                </View>
                <View>
                    <Text style={{ fontFamily: 'dancingScript', fontSize: 25, color:'white', paddingBottom:4 }}> MY CART</Text>

                    </View>

                <View
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    style={{
                        // height: Dimensions.get('screen').height * .3,
                        paddingTop: 20,
                        borderTopRightRadius: 20,
                        borderTopLeftRadius: 20,
                        backgroundColor: '#ffffff',
                        height: '205%',
                    }}>
                    <FlatList
                        data={stories}

                        showsHorizontalScrollIndicator={false}
                        renderItem={
                            ({ item }) => (
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ flex: 3, paddingLeft: 20 }}>
                                        <Image style={{ height: 90, width: '70%', borderRadius: '30' }} source={{ uri: item.image }} />

                                    </View>
                                    <View style={{ flex: 5, height: 120 }}>
                                        <Text style={{ fontFamily: 'dancingScript', fontSize: 15 }}>
                                            {item.name}
                                        </Text>
                                        <Text style={{ fontFamily: 'dancingScript', fontSize: 25, color: '#ff471a' }}>
                                            {item.price}
                                        </Text>
                                        <Button transparent>
                                            <Text style={{ fontFamily: 'dancingScript', fontSize: 20, color: '#003366' }}>Remove</Text>
                                        </Button>
                                    </View>
                                

                                </View>
                                
                            )
                        }
                    />
                    <View style={{ flexDirection: 'row',  absolutePosition:20, alignItems: 'center', marginBottom: '5%',paddingHorizontal:"3%" }}>
                        <View style={{ borderWidth: .7, borderColor: 'grey' ,width:'100%'}}>

                        </View>
                        
                    </View>
                    <View style={{flexDirection:'row', absolutePosition:20,justifyContent:'space-between', alignContent:'center', paddingHorizontal:'10%',paddingTop:30}}>
                        <Text style={{ fontFamily: 'dancingScript', fontSize: 20 }}>
                            Subtotal(4 Items)
                        </Text>
                        <Text style={{ fontFamily: 'dancingScript', fontSize: 25,color: '#ff471a' }}> $6897.99</Text>
                    </View>
                    <View style={{paddingTop:50, paddingLeft:120, alignContent:'center'}}>
                        <Button  light style={{color:'#003333', }}>
                            <Text style={{ fontFamily: 'dancingScript', fontSize: 25 }}> CHECK OUT</Text>
                        </Button>
                    </View>
                </View>
            </ImageBackground>

        )
    }
}

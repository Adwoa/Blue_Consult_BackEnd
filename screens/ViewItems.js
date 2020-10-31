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
        image: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80',
        name: 'JHGJHGJGCKujhku',
        price: '$1099.99',
        discount: 'No discounts available'

    },
    {
        id: 10,
        image: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80',
        name: 'JHGJHGJGCKujhku',
        price: '$770.88',
        discount: '20% discount'

    },
    {
        id: 11,
        image: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80',
        name: 'JHGJHGJGCKujhku',
        price: '$940.02',
        discount: '50% discount'

    },
    {
        id: 12,
        image: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80',
        name: 'JHGJHGJGCKujhku',
        price: '$190.11',
        discount: '90% discount'

    },
    {
        id: 21,
        image: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80',
        name: 'JHGJHGJGCKujhku',
        price: '$8899.99',
        discount: '90% discount'

    },
    {
        id: 20,
        image: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80',
        name: 'JHGJHGJGCKujhku',
        price: '$2190',
        discount: '90% discount'

    },
]

export default class ViewItems extends Component {
    render() {
        return (

            <ImageBackground
                style={{ width: '100%', height: '40%', backgroundColor: '#003366', }}>

                <View style={{ flexDirection: 'row', paddingTop: 30, alignItems: 'center', marginHorizontal: 10, paddingBottom: 50 }}>

                    <Button transparent >
                        {/* <Icon name="arrow-back" style={{ color: "#fff" }} /> */}
                        <Icon name="menu" style={{ color: 'white' }}
                            onPress={() => this.props.navigation.toggleDrawer()} />
                    </Button>
                    <Text style={{ color: '#ffffff', fontSize: 35, paddingLeft: 40, fontFamily: 'dancingScript' }}>Blue Consult</Text>
                    {/* <Icon name="menu" style={{ color: 'white' }} /> */}
                    <Icon name="cart" style={{ color: 'white', paddingLeft: 60}} />

                </View>
                <Text style={{ color: '#ffffff', fontSize: 35, paddingHorizontal: 110, color: '#ff471a', fontFamily: 'dancingScript' }}>BUY ME!!!</Text>

                <View style={{ alignItems: 'center', paddingRight: 25, paddingLeft: 40, justifyContent: 'center', paddingHorizontal: 30 }}>
                    <Item searchBar style={{ margin: 20, paddingLeft: 10, backgroundColor: 'white', borderRadius: 10 }}>
                        <Icon name="ios-search" />
                        <Input placeholder="Search" />
                        <Icon name="ios-people" />
                    </Item>
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
                        height: '170%',
                    }}>
                    <FlatList
                        data={stories}

                        showsHorizontalScrollIndicator={false}
                        renderItem={
                            ({ item }) => (
                                <TouchableOpacity

                                    style={{ flexDirection: 'row' }}>
                                    <View style={{ flex: 5, paddingLeft: 20 }}>
                                        <Image
                                            onPress={() => this.props.navigation.navigate('CartScreen')}
                                            style={{ height: 90, width: '70%', borderRadius: '30' }} source={{ uri: item.image }} />

                                    </View>
                                    <View style={{ flex: 5, height: 120 }}>
                                        <Text style={{ fontFamily: 'dancingScript', fontSize: 15 }}>
                                            {item.name}
                                        </Text>
                                        <Text style={{ fontFamily: 'dancingScript', fontSize: 25, color: '#ff471a' }}>
                                            {item.price}
                                        </Text>
                                        <Text style={{ fontFamily: 'dancingScript', fontSize: 12 }}>
                                            {item.discount}
                                        </Text>
                                        <Button    transparent                             onPress={() => this.props.navigation.navigate('Product Description')}
>
                                           <Text style={{ fontFamily: 'dancingScript', fontSize: 15, color: '#ff471a' }} >
                                            Details
                                           </Text>
                                        </Button>
                                    </View>
                                </TouchableOpacity>

                            )
                        }
                    />
                </View>
            </ImageBackground>

        )
    }
}

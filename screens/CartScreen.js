import React, { Component } from 'react';
import { Text, View, ScrollView, Landscape, Dimensions, FlatList, Image, ImageBackground } from 'react-native';
import ReactNativeParallaxHeader from 'react-native-parallax-header';
import { Container, Header, Left, Body, Right, Button, Item, Input, Icon, Title, Content, Picker, Toast } from 'native-base';
import { TextInput, TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import axios from 'axios'


const stories = [
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80',
        collection: 'Ukgyrkjdhiu',
        name: 'Dining chair',
        price: '$20.99',
        description: 'Hjhsbk kskj gyk sfutgkjsbjhf wekfwfgb fwkwf skjwfeb qwkfhbqq qiuhfm qwfwhilkq wfhkqf qkewfb sfkikbsf kfewb wnlkjwsf kwfhwf kwfbjfw kqwfhqwf '


    },
    // {
    //     id: 2,
    //     image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    //     collection: 'Ukgyrkjdhiu',
    //     name: 'Dining chair',
    //     price: '$60.99',
    //     description: 'Hjhsbk kskj gyk sfutgkjsbjhf wekfwfgb fwkwf skjwfeb qwkfhbqq qiuhfm qwfwhilkq wfhkqf qkewfb sfkikbsf kfewb wnlkjwsf kwfhwf kwfbjfw kqwfhqwf '
    // },
    // {
    //     id: 3,
    //     image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    //     collection: 'Ukgyrkjdhiu',
    //     name: 'Dining chair',
    //     price: '$129.99',
    //     description: 'Hjhsbk kskj gyk sfutgkjsbjhf wekfwfgb fwkwf skjwfeb qwkfhbqq qiuhfm qwfwhilkq wfhkqf qkewfb sfkikbsf kfewb wnlkjwsf kwfhwf kwfbjfw kqwfhqwf '

    // },
    // {
    //     id: 4,
    //     image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    //     collection: 'Ukgyrkjdhiu',
    //     name: 'Dining chair',
    //     price: '$290.99',
    //     description: 'Hjhsbk kskj gyk sfutgkjsbjhf wekfwfgb fwkwf skjwfeb qwkfhbqq qiuhfm qwfwhilkq wfhkqf qkewfb sfkikbsf kfewb wnlkjwsf kwfhwf kwfbjfw kqwfhqwf '

    // },
    // {
    //     id: 5,
    //     image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    //     collection: 'Ukgyrkjdhiu',
    //     name: 'Dining chair',
    //     price: '$298.99',
    //     description: 'Hjhsbk kskj gyk sfutgkjsbjhf wekfwfgb fwkwf skjwfeb qwkfhbqq qiuhfm qwfwhilkq wfhkqf qkewfb sfkikbsf kfewb wnlkjwsf kwfhwf kwfbjfw kqwfhqwf '

    // },



]

export default class CartScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: "key1"
        };
    }
    onValueChange(value) {
        this.setState({
            selected: value
        });
    }

    render() {
        return (
            <Container>
                <Header style={{ alignItems: 'center', backgroundColor: '#003366', justifyContent: 'center' }}>
                    <Left>
                        <View  >
                            {/* <Icon name="arrow-back" style={{ color: "#fff" }} /> */}
                            <Icon name="menu" style={{ color: 'white' }}
                                onPress={() => this.props.navigation.toggleDrawer()} />

                        </View>
                    </Left>
                    <Body>
                        <Title style={{ color: 'white', textAlign:'center',alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '18', fontFamily: 'dancingScript', }}>BLUE CONSULT</Title>
                    </Body>

                    <Right>
                    <Icon name="cart" style={{ color: 'white', paddingLeft: 15, paddingTop: 32, paddingBottom:60 }} />

                        {/* <Button transparent>
                        <Icon name='cart' />
                    </Button> */}
                        {/* <Button > */}
                        {/* <RNPickerSelect
                            Icon= { ()=> <Icon name="menu" style={{ color: 'white' }} />}
                            onValueChange={this.onValueChange.bind(this)}
                            items={[
                                { label: 'Football', value: 'football' },
                                { label: 'Baseball', value: 'baseball' },
                                { label: 'Hockey', value: 'hockey' },
                            ]}
                        />  */}
                        {/* <Picker
                            mode="dropdown"

                            iosIcon={<Icon name="menu" style={{ color: 'white' }} />}
                            style={{ width: undefined }}
                            selectedValue={this.state.selected}
                            onValueChange={this.onValueChange.bind(this)}
                            supportedOrientations={{ Landscape }}
                        > */}
                        {/* <Picker.Item label="Cart" value="key0" /> */}
                        {/* <Picker.Item label="Credit Card Details" value="key1" />
                            <Picker.Item label="Net Banking" value="key2"
                                onPress={() => this.props.navigation.navigate('PaymentScreen')}
                            />
                            <Picker.Item label="Sign Out" value="key3" />
                            <Picker.Item label="Settings" value="key4" />

                        </Picker> */}
                        {/* </Button>  */}
                    </Right>
                </Header>
                <Content searchBar rounded>

                    <Item style={{ alignContent: 'flex-end', justifyContent: 'space-around' }}>
                        <Icon name="ios-search" />
                        <Input placeholder="Search" />
                        <Icon name="ios-people" />
                    </Item>
                    {/* <Button transparent>
                    <Text>Search</Text>
                </Button> */}

                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        style={{
                            // height: Dimensions.get('screen').height * .8,
                            borderTopRightRadius: 20,
                            borderTopLeftRadius: 20,
                            // backgroundColor: '#e6faff'
                        }}>
                        <View style={{ flex: 1, }}>


                            <FlatList
                                data={stories}
                                vertical
                                showsHorizontalScrollIndicator={false}
                                renderItem={
                                    ({ item }) => (
                                        <View style={{ margin: 10, alignItems: 'center', borderRadius: 40, }}>
                                            <ImageBackground
                                                onPress={() => this.props.navigation.navigate('ShoesScreen')}
                                                style={{ height: 600, width: 300, resizeMode: 'cover', borderRadius: 40, justifyContent: 'flex-end', }}
                                                source={{ uri: item.image }}
                                                imageStyle={{ borderRadius: 10 }}
                                            >
                                                {/* <Button transparent style={{ alignContent: 'flex-end', paddingLeft: "70%" }}>
                                                    <Text style={{ fontFamily: 'dancingScript', color: '#003333' }}>Add to Cart</Text>
                                                </Button> */}
                                                <TouchableOpacity>

                                                    <View style={{ height: 160, backgroundColor: 'rgba(0,0,0,.2)', borderTopLeftRadius: 10, borderTopRightRadius: 10, width: '100%' }}>
                                                        <Text style={{ color: 'white', paddingBottom: 5, fontSize: 23, fontWeight: 'bold', }} >
                                                            {item.collection}
                                                        </Text>
                                                        <Text style={{ width: 100, color: 'white', textAlign: 'center', paddingBottom: 5, fontSize: 20, fontWeight: 'bold', fontFamily: 'dancingScriptB' }} >
                                                            {item.name}
                                                        </Text>
                                                        <Text style={{ width: 100, color: 'white', paddingBottom: 5, fontSize: 20, fontWeight: 'bold', fontFamily: 'dancingScriptB' }} >
                                                            {item.price}
                                                        </Text>
                                                        <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center', fontFamily: 'dancingScriptB' }} >
                                                            {item.description}
                                                        </Text>
                                                    </View>
                                                </TouchableOpacity>
                                                <Button
                                                    onPress={() =>
                                                        Toast.show({
                                                            text: "Added to cart!",
                                                            position: 'top',
                                                            buttonText: "Okay",
                                                            duration: 3000
                                                        })}
                                                    transparent style={{ justifyContent: 'center', textAlign: 'center', color: '#003333', paddingLeft: 90 }}>
                                                    <Text style={{ fontFamily: 'dancingScript', fontSize: 20, color: '#ff471a', fontWeight: 'bold' }}>
                                                        ADD TO CART
                                                    </Text>
                                                </Button>
                                            </ImageBackground>

                                        </View>

                                    )
                                }
                            />
                        </View>

                    </ScrollView>

                </Content>
            </Container>
        )
    }
}

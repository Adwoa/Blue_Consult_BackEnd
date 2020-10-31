import React, { Component } from 'react';
import { Text, View, ScrollView, Landscape, Dimensions, FlatList, Image, ImageBackground } from 'react-native';
import ReactNativeParallaxHeader from 'react-native-parallax-header';
import { Container, Header, Left, Body, Right, Button, Item, Input, Icon, Title, Content, Picker } from 'native-base';
import { TextInput, TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
// import RNPickerSelect from 'react-native-picker-select';


const stories = [
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1519947486511-46149fa0a254?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        collection: 'Ukgyrkjdhiudglku',
        name: 'Chairs',
        price: '$20.99',

    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1551298698-66b830a4f11c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        collection: 'Ukgyrkjdhiudglku',
        name: 'Chairs',
        price: '$60.99',
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        collection: 'Ukgyrkjdhiudglku',
        name: 'Chairs',
        price: '$129.99',
    },
    {
        id: 4,
        image: 'https://images.unsplash.com/photo-1551516594-56cb78394645?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        collection: 'Ukgyrkjdhiudglku',
        name: 'Chairs',
        price: '$290.99',
    },
    {
        id: 5,
        image: 'https://images.unsplash.com/photo-1544030288-e6e6108867f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        collection: 'Ukgyrkjdhiudglku',
        name: 'Chairs',
        price: '$298.99',
    },



]



export default class Search extends Component {
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
                <Header style={{ alignItems: 'center', backgroundColor:'#003366', justifyContent: 'center' }}>
                    <Left>
                        <Button transparent >
                            <Icon name="arrow-back" style={{ color: "#fff" }} />
                        </Button>
                    </Left>
                    <Body>
                        <Title style={{ color: 'white', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '18', fontFamily: 'dancingScript' }}>BLUE CONSULT</Title>
                    </Body>
                    <Right>
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
                        <Picker
                            mode="dropdown"

                            iosIcon={<Icon name="menu" style={{ color: 'white' }} />}
                            style={{ width: undefined }}
                            selectedValue={this.state.selected}
                            onValueChange={this.onValueChange.bind(this)}
                            supportedOrientations={{ Landscape }}
                        >
                            <Picker.Item label="Cart" value="key0" />
                            <Picker.Item label="Credit Card Details" value="key1" />
                            <Picker.Item label="Net Banking" value="key2"
                                onPress={() => this.props.navigation.navigate('PaymentScreen')}
                            />
                            <Picker.Item label="Sign Out" value="key3" />
                            <Picker.Item label="Settings" value="key4" />

                        </Picker>
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
                            height: Dimensions.get('screen').height * .8,
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
                                                style={{ height: 400, width: 300, resizeMode: 'cover', borderRadius: 40, justifyContent: 'flex-end', }}
                                                source={{ uri: item.image }}
                                            >
                                                <View style={{ height: 120, backgroundColor: 'rgba(0,0,0,.5)', borderTopLeftRadius: 10, borderTopRightRadius: 10, width: '100%' }}>
                                                    <Text style={{ width: 100, textAlign: 'center', fontWeight: 900, fontFamily: 'dancingScriptB' }} >{item.collection, item.name, item.price}</Text>
                                                </View>
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


// const styles =StyleSheet.create({

// });
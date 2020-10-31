import React, { Component } from 'react';
import { StyleSheet, View, Text, StatusBar, FlatList, Dimensions, TouchableOpacity, Image, ImageBackground, ScrollView } from 'react-native';
import ReactNativeParallaxHeader from 'react-native-parallax-header';
import { Drawer, Content, Item, Icon, Header, Input, Button } from 'native-base';
// import { Header } from 'react-native/Libraries/NewAppScreen';
import Carousel from 'react-native-snap-carousel';
import { SliderBox } from "react-native-image-slider-box";
import MainDrawerNavigator from '../Navigation/MainDrawerNavigator';

// import SideBar from './yourPathToSideBar';


const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 44 : 20) : 0;
const HEADER_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 88 : 64) : 64;
const NAV_BAR_HEIGHT = HEADER_HEIGHT - STATUS_BAR_HEIGHT;

const renderNavBar = () => (
  <View style={styles.navContainer}>
    <View style={styles.statusBar} />
    <View style={styles.navBar}>
      <TouchableOpacity style={styles.iconLeft} onPress={() => { }}>
        <Text style={{ color: 'white' }}>About</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconRight} onPress={() => { }}>
        <Text style={{ color: 'white' }}>Me</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const renderContent = () => {
  return (
    <View style={styles.body}>
      {/* {Array.from(Array(30).keys()).map((i) => (
        <View
          key={i}
          style={{padding: 15, alignItems: 'center', justifyContent: 'center'}}>
          <Text>Item </Text>
        </View>
      ))} */}
    </View>
  );
};

const stories = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1592923750193-0caa23a10e1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    name: 'Tables',

  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1592923750193-0caa23a10e1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    name: 'Chairs',

  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1592923750193-0caa23a10e1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    name: 'Shelves',

  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1592923750193-0caa23a10e1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    name: 'Wardrobe',

  },
]

const fur = [
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1516650556972-e9904734f467?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    name: 'Tables',

  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1516650556972-e9904734f467?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    name: 'Chairs',

  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1516650556972-e9904734f467?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    name: 'Shelves',

  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1516650556972-e9904734f467?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    name: 'Wardrobe',

  },
]


const rate = [
  {
    id: 9,
    image: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80',


  },
  {
    id: 10,
    image: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80',


  },
  {
    id: 11,
    image: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80',


  },
  {
    id: 12,
    image: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80',


  },
]

const post = [
  "https://source.unsplash.com/1024x768/?nature",
  "https://source.unsplash.com/1024x768/?water",
  "https://source.unsplash.com/1024x768/?girl",
  "https://source.unsplash.com/1024x768/?tree",
]

const title = () => {
  return (
    <View style={styles.body}>
      <Text style={{ color: '#ffffff', fontSize: 35 }}>Blue Consult</Text>
    </View>
    // <View>
    //   <Header searchBar rounded>
    //       <Item>
    //         <Icon name="ios-search" />
    //         <Input placeholder="Search" />
    //          <Icon name="ios-people" />
    //        </Item>
    //        <Button transparent>
    //          <Text>Search</Text>
    //        </Button>
    //      </Header>
    //  </View>
  )
}

class App extends Component {
  render() {

    return (<>
      <StatusBar barStyle="dark-content" />
      {/* <ReactNativeParallaxHeader
        headerMinHeight={HEADER_HEIGHT}
        headerMaxHeight={250}
        extraScrollHeight={20}
        navbarColor="#3498db"
        titleStyle={styles.titleStyle}
        title={title()}
        backgroundImage={require('../assets/wood8.jpeg')}
        backgroundImageScale={1.2}
        renderNavBar={renderNavBar}
        renderContent={renderContent}
        containerStyle={styles.container}
        contentContainerStyle={styles.contentContainer}
        innerContainerStyle={styles.container}
        scrollViewProps={{
          onScrollBeginDrag: () => console.log('onScrollBeginDrag'),
          onScrollEndDrag: () => console.log('onScrollEndDrag'),
        }}
      /> */}

      <ImageBackground
        style={{ width: '100%', backgroundColor: '#003366' }}
      // source={{uri:'https://images.unsplash.com/photo-1567016432779-094069958ea5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'}}
      >

        <View style={{justifyContent:'space-between', alignContent:'space-between', flexDirection:'row', paddingRight:10}}>
          <Icon name="menu" style={{ color: 'white', paddingLeft: 15, paddingTop: 32 }}
            onPress={() => this.props.navigation.toggleDrawer()} />

          <Icon name="cart" style={{ color: 'white', paddingLeft: 15, paddingTop: 32 }} />
        </View>

        <View style={{ height: 80, justifyContent: 'flex-end', }}>
          <Text style={{ fontSize: 35, textAlign: 'center', color: 'white', fontWeight: 'bold', paddingBottom: 10, fontFamily: 'dancingScriptB' }}>Blue Consult</Text>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          style={{
            height: Dimensions.get('screen').height * .8,
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            backgroundColor: '#e6faff'
          }}>



          <View showsVerticalScrollIndicator contentContainerStyle={{ alignItems: 'center', justifyContent: 'center', }}>
            <SliderBox
              images={post}
              sliderBoxHeight={200}
              activeAnimationOptions={null}
              ImageComponentStyle={{ borderRadius: 0, width: '100%', alignSelf: 'center', }}
              autoplay={true}
            />

            <View >

            </View>
          </View>
          <View >
            <View style={{ flex: 1, }}>
              <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                <Text
                  style={{ width: 100, textAlign: 'center', paddingTop: 30, fontWeight: 900, fontFamily: 'dancingScriptB' }} >FURNITURE</Text>
                <TouchableOpacity >
                  <Text
                    onPress={() => this.props.navigation.navigate('Product Description')}
                    style={{
                      width: 100, textAlign: 'center', paddingTop: 30, fontWeight: 900, fontFamily: 'dancingScriptB'
                    }}> SEE ALL</Text>
                </TouchableOpacity>
              </View>
            </View >
            <FlatList
              data={fur}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={
                ({ item }) => (

                  <View style={{ margin: 10, alignItems: 'center', paddingBottom: 20 }}>

                    <Image
                      style={{ height: 200, width: 170, resizeMode: 'cover', borderRadius: 30 }}
                      source={{ uri: item.image }}
                    />
                    {/* <Text style={{ width: 100, textAlign: 'center', fontFamily: 'dancingScriptB' }} >{item.name}</Text> */}
                  </View>


                )
              }
            />
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: '5%' }}>
              <View style={{ flex: 6, borderWidth: .5, borderColor: 'grey' }}>

              </View>
            </View>

            <FlatList
              data={stories}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={
                ({ item }) => (
                  <TouchableOpacity>
                    <View style={{ margin: 10, alignItems: 'center', paddingBottom: 10 }}>
                      <Image
                        onPress={() => this.props.navigation.navigate('ShoesScreen')}
                        style={{ height: 100, width: 100, resizeMode: 'cover', borderRadius: 30 }}
                        source={{ uri: item.image }}
                      />
                      <Text style={{ width: 100, textAlign: 'center', fontWeight: 900, fontFamily: 'dancingScriptB' }} >{item.name}</Text>
                    </View>
                  </TouchableOpacity>

                )
              }
            />

          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: '5%' }}>
            <View style={{ flex: 6, borderWidth: .5, borderColor: 'grey' }}>

            </View>
          </View>

          <View>
            <View style={{ flex: 1 }}>
              <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ width: 100, textAlign: 'center', paddingTop: 5, fontWeight: 900, fontFamily: 'dancingScriptB' }} >COUCHES</Text>
                <TouchableOpacity>

                  <Text
                    onPress={() => this.props.navigation.navigate('Product Description')}
                    style={{ width: 100, textAlign: 'center', paddingTop: 5, fontWeight: 900, fontFamily: 'dancingScriptB' }}> SEE ALL</Text>
                </TouchableOpacity>
              </View>
            </View >
            <FlatList
              data={rate}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={
                ({ item }) => (

                  <View style={{ margin: 10, alignItems: 'center', paddingTop: 1, }}>

                    <Image
                      style={{ height: 200, width: 170, resizeMode: 'cover', borderRadius: 30 }}
                      source={{ uri: item.image }}
                    />
                    {/* <Text style={{ width: 100, textAlign: 'center', fontFamily: 'dancingScriptB' }} >{item.name}</Text> */}
                  </View>


                )
              }
            />

          </View>
        </ScrollView>

      </ImageBackground>

    </>)
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
  },
  navContainer: {
    height: HEADER_HEIGHT,
    marginHorizontal: 10,
  },
  statusBar: {
    height: STATUS_BAR_HEIGHT,
    backgroundColor: 'transparent',
  },
  navBar: {
    height: NAV_BAR_HEIGHT,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'transparent',
  },
  titleStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default App;
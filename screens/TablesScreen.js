import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Container, Header, Content, Left,Right,Button, Title, Icon, Body } from 'native-base';

export default class TablesScreen extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='search' />
            </Button>
            {/* <Button transparent>
              <Icon name='heart' />
            </Button>
            <Button transparent>
              <Icon name='more' />
            </Button> */}
          </Right>
        </Header>
        <Content>
          <View style={{ flex: 1, }}>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
              <Text
                style={{ width: 100, textAlign: 'center', paddingTop: 30, fontWeight: 900, fontFamily: 'dancingScriptB' }} >FURNITURE</Text>
              <TouchableOpacity >
                <Text
                  style={{
                    width: 100, textAlign: 'center', paddingTop: 30, fontWeight: 900, fontFamily: 'dancingScriptB'
                  }}> SEE ALL</Text>
              </TouchableOpacity>
            </View>
          </View >
        </Content>
      </Container>
    )
  }
}

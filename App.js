import { Root, StyleProvider } from 'native-base';
import React from 'react';
import RootNavigator from './Navigation/RootNavigator';
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { requireNativeComponent } from 'react-native';




export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      "dancingScript": require('./assets/font/DancingScript-Medium.ttf'),
      "dancingScriptB": require('./assets/font/DancingScript-Bold.ttf'),
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }


  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <StyleProvider style={getTheme(material)}>
        <Root>
          <RootNavigator />
        </Root>
      </StyleProvider>
    );
  }


}

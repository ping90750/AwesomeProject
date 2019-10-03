/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar
} from "react-native";
import NavigatorView from "./src/Modules/navigation/NavigatorView"
export default class App extends Component<Props> {
  render() {
    return (

<View style={{flex:1}}><NavigatorView/></View> 

  );
  };
}

const styles = StyleSheet.create({});


{/* <View style={{
    marginTop: 50
  }}>
  <Text>Hello Wolrd</Text>
</View>  */}

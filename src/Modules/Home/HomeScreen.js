import React, {Component} from "react";
import {View, Text} from "react-native";
export default class HomeScreen extends Component<Props> {
  render() {
    return (<View style={{
        marginTop: 50
      }}>
      <Text>Hello World Home</Text>
    </View>);
  };
}

const styles = StyleSheet.create({});

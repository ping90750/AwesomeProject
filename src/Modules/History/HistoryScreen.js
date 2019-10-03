import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import TabMenu from "../../Components/TabMenu";
import { Container, Content, Text } from "native-base";

type Props = {};

export default class HistoryScreen extends Component<Props> {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
    return { title: "History", headerRight: <Text /> };
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View
        style={{
          marginTop: 50
        }}
      >
        <Text>Hello World</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff"
  }
});

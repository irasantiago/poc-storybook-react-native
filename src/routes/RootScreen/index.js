import React from "react";
import { Button, Text, View } from "react-native";

import styles from "./styles.js";

class RootScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Root</Text>
        <Button
          title="Go to App"
          onPress={() => this.props.navigation.navigate("Home")}
        />
        <Button
          title="Go to Storybook"
          onPress={() => this.props.navigation.navigate("Storybook")}
        />
      </View>
    );
  }
}

export default RootScreen;

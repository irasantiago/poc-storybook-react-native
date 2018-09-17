import React from "react";
import { Button, Text, View } from "react-native";

import styles from "./styles.js";

class RootContainer extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcome</Text>
        <Button
          onPress={() => this.props.navigation.navigate("Home")}
          title="Go to App"
        />
        <Button
          onPress={() => this.props.navigation.navigate("Storybook")}
          title="Go to Storybook"
        />
      </View>
    );
  }
}

export default RootContainer;

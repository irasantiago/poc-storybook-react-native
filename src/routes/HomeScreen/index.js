import React from "react";
import { Button, Text, View } from "react-native";

import styles from "./styles.js";

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Home</Text>
        <Button
          title="Go to Order"
          onPress={() => this.props.navigation.navigate("Order")}
        />
      </View>
    );
  }
}

export default HomeScreen;

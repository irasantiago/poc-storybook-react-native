import React, { Component } from "react";
import { Text, View } from "react-native";

import styles from "./styles.js";

class SelectionMenuHeader extends Component {
  render() {
    const { title, icon } = this.props;
    return (
      <View style={styles.container}>
        <Text>{title}</Text>
        <Text>{icon}</Text>
      </View>
    );
  }
}

export default SelectionMenuHeader;

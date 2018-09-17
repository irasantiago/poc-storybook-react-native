import React, { Component } from "react";
import { Text, View } from "react-native";

import styles from "./styles.js";

class SelectionMenuItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { icon, title, description, footer } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.contentWrapper}>
          <Text>{icon}</Text>
          <Text>{title}</Text>
          <Text>{description}</Text>
          <Text>{footer}</Text>
        </View>
      </View>
    );
  }
}

export default SelectionMenuItem;

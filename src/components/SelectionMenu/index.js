import React, { Component } from "react";
import { View, ScrollView } from "react-native";

import SelectionMenuItem from "./SelectionMenuItem";
import SelectionMenuHeader from "./SelectionMenuHeader";

import styles from "./styles.js";

class SelectionMenu extends Component {
  render() {
    const { title, icon, menuItems } = this.props;

    return (
      <View style={styles.container}>
        <SelectionMenuHeader title={title} icon={icon} />

        <ScrollView style={styles.list} horizontal>
          {Boolean(menuItems) &&
            menuItems.map((menuItem, i) => (
              <SelectionMenuItem key={i} {...menuItem} />
            ))}
        </ScrollView>
      </View>
    );
  }
}

export default SelectionMenu;

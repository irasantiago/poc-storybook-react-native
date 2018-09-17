import React from "react";
import { Text, View } from "react-native";

import styles from "./styles.js";

import SelectionMenu from "../../components/SelectionMenu";
import { menuItemsLocation } from "../../components/SelectionMenu/data.js";

class OrderContainer extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SelectionMenu title="New York, NY" menuItems={menuItemsLocation} />
      </View>
    );
  }
}

export default OrderContainer;

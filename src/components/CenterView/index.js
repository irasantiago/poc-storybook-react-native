import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import styles from "./styles";

const CenterView = props => <View style={styles.main}>{props.children}</View>;

CenterView.propTypes = {
  children: PropTypes.node.isRequired
};

export { CenterView as default };

import React from "react";
import { View, StyleSheet } from "react-native";

import colors from "../config/colors";

const ItemSeparator = ({ height = 2.5, color = colors["white"] }) => {
  return (
    <View
      style={[styles.container, { height: height, backgroundColor: color }]}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors["white"],
  },
});

export default ItemSeparator;

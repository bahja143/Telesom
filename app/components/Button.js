import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import colors from "../config/colors";

const Button = ({ title, color = "primary", onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 58,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 40,
  },
  text: {
    color: colors["white"],
    fontSize: 19,
    fontWeight: "700",
  },
});

export default Button;

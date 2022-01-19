import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { RadioButton } from "react-native-paper";

import colors from "../config/colors";

const RadioBtn = ({ checked, setChecked, name, label }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => setChecked(name)}>
      <RadioButton
        value={name}
        status={checked === name ? "checked" : "unchecked"}
        onPress={() => setChecked(name)}
        color={colors["primary"]}
      />
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  text: {
    marginTop: 6,
    fontSize: 17,
    color: colors["lightBlack"],
  },
});

export default RadioBtn;

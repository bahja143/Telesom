import React from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";

import colors from "../config/colors";

const InputText2 = ({ icon, width = "100%", label, ...otherProps }) => {
  return (
    <View style={[styles.container, { width: width }]}>
      <View style={styles.codeContainer}>
        <Text style={styles.code}>{label}</Text>
      </View>
      <TextInput
        style={styles.text}
        {...otherProps}
        keyboardType="numeric"
        maxLength={7}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors["light"],
    width: "100%",
    height: 61.5,
    borderRadius: 35,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 25,
    overflow: "hidden",
  },
  text: {
    fontSize: 20,
    color: colors["lightBlack"],
    marginLeft: 5,
    width: "92%",
  },
  code: {
    fontSize: 20,
    color: colors["medium"],
    marginLeft: 5,
    paddingRight: 5,
  },
  codeContainer: {
    borderRightWidth: 1,
    borderRightColor: colors["medium"],
  },
});

export default InputText2;

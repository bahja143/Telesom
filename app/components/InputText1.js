import React from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";

import colors from "../config/colors";

const InputText1 = ({ icon, label, width = "100%", ...otherProps }) => {
  return (
    <>
      <Text style={styles.label}>{label}</Text>
      <View style={[styles.container, { width: width }]}>
        <TextInput style={styles.text} {...otherProps} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors["white"],
    width: "100%",
    height: 55,
    flexDirection: "row",
    alignItems: "center",
    borderColor: colors["light"],
    borderBottomWidth: 3,
    overflow: "hidden",
  },
  text: {
    fontSize: 16.5,
    color: colors["lightBlack"],
    width: "100%",
    fontFamily: "sans-serif-light",
  },
  label: {
    fontSize: 18,
    color: colors["medium"],
    fontFamily: "sans-serif-light",
    top: 5,
  },
});

export default InputText1;

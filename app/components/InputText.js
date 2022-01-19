import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

const InputText = ({ icon, width = "100%", ...otherProps }) => {
  return (
    <View style={[styles.container, { width: width }]}>
      <MaterialCommunityIcons name={icon} color={colors["primary"]} size={25} />
      <TextInput style={styles.text} {...otherProps} />
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
});

export default InputText;

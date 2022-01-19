import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

import colors from "../config/colors";

const PickerItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Entypo name="dot-single" color={colors["primary"]} size={32} />
      <Text style={styles.text}>{item.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: 5,
    marginLeft: 15,
  },
  text: {
    fontSize: 18,
    color: colors["lightBlack"],
  },
});

export default PickerItem;

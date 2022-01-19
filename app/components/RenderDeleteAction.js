import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

const RenderDeleteAction = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <MaterialCommunityIcons
        name="trash-can"
        color={colors["white"]}
        size={30}
      />
      <Text style={styles.text}>Delete SMS</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "38%",
    height: 70,
    backgroundColor: colors["danger"],
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
    paddingRight: 25,
  },
  text: {
    color: colors["white"],
    fontSize: 15,
    marginLeft: 3,
  },
});

export default RenderDeleteAction;

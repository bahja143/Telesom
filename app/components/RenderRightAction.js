import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Entypo } from "@expo/vector-icons";

import colors from "../config/colors";

const RenderRightAction = ({ isBooked }) => {
  return isBooked ? (
    <View style={[styles.container, { backgroundColor: colors["danger"] }]}>
      <Text style={[styles.text, { fontSize: 20 }]}>Cancel Booking</Text>
      <Entypo name="tools" size={30} color={colors["white"]} />
    </View>
  ) : (
    <View style={styles.container}>
      <Text style={styles.text}>Book</Text>
      <Entypo name="tools" size={30} color={colors["white"]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors["primary"],
    width: "100%",
    height: 90,
    paddingRight: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  text: {
    color: colors["white"],
    fontSize: 22,
    marginRight: 15,
  },
});
export default RenderRightAction;

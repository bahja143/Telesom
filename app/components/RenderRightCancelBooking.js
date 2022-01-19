import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Entypo } from "@expo/vector-icons";

import colors from "../config/colors";

const RenderRightCancelBooking = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Cancel Booking</Text>
      <Entypo name="trash" size={30} color={colors["white"]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors["danger"],
    width: "100%",
    height: 90,
    paddingRight: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  text: {
    color: colors["white"],
    fontSize: 20.5,
    marginRight: 15,
    fontFamily: "sans-serif-medium",
  },
});
export default RenderRightCancelBooking;

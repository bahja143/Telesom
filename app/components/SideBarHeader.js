import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import colors from "../config/colors";

const SideBarHeader = () => {
  return (
    <View style={styles.container}>
      <MaterialIcons
        name="account-circle"
        size={80}
        color={colors["light"]}
        style={styles.icon}
      />
      <Text style={styles.name} numberOfLines={1}>
        Bashir Mohamed Abdullahi
      </Text>
      <Text style={styles.number}>0636438641</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors["primary"],
    width: "100%",
    height: 175,
  },
  icon: {
    marginTop: 15,
    marginLeft: 25,
  },
  name: {
    fontFamily: "sans-serif-light",
    marginLeft: 30,
    marginTop: 10,
    color: colors["white"],
    fontSize: 20,
    fontWeight: "700",
  },
  number: {
    marginLeft: 30,
    marginTop: 5,
    color: colors["secondary"],
    fontSize: 15,
    fontFamily: "sans-serif-light",
  },
});

export default SideBarHeader;

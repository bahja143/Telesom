import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import Logo from "../assets/Logo.png";

const DrawerHeader = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <MaterialCommunityIcons name="menu" color={colors["white"]} size={32} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors["primary"],
    width: "100%",
    height: 60,
    paddingLeft: 17,
    paddingTop: 13,
    flexDirection: "row",
  },
  logo: {
    width: 55,
    height: 55,
    position: "absolute",
    right: 175,
    top: 5,
  },
});

export default DrawerHeader;

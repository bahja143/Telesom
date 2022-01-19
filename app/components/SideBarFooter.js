import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import colors from "../config/colors";
import Logo from "../assets/Logo.png";

const SideBarFooter = () => {
  return (
    <View style={styles.container}>
      <View style={styles.hr} />
      <View style={styles.subContainer}>
        <Image style={styles.logo} source={Logo} />
        <Text style={styles.version}>Version 1.0.0</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  hr: {
    backgroundColor: colors["light"],
    width: "100%",
    height: 1.6,
    marginTop: 60,
  },
  logo: {
    width: 80,
    height: 80,
  },
  subContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  version: {
    fontSize: 18,
    fontFamily: "sans-serif-light",
    color: colors["medium"],
    marginTop: 5,
  },
});

export default SideBarFooter;

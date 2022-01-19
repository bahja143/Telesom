import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import colors from "../config/colors";

const ProfileDashboard = () => {
  return (
    <View style={styles.profile}>
      <MaterialIcons name="account-circle" size={65} color={colors["medium"]} />
      <View style={styles.textContainer}>
        <Text style={styles.title} numberOfLines={1}>
          Bashier Mohamed Abdullahi
        </Text>
        <Text style={styles.subtitle}>Wellcome to Telesom</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profile: {
    width: "100%",
    height: 70,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 15,
  },
  title: {
    fontSize: 19,
    fontFamily: "sans-serif-medium",
    color: colors["lightBlack"],
    width: 300,
  },
  textContainer: {
    marginLeft: 8,
  },
  subtitle: {
    color: colors["secondary"],
    fontFamily: "sans-serif-light",
  },
});

export default ProfileDashboard;

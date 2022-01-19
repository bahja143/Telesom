import React from "react";
import { View, Text, StyleSheet } from "react-native";

import colors from "../config/colors";

const ViewNotificationsScreen = ({ route }) => {
  const { params: notification } = route;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{notification.title}</Text>
      <Text style={styles.date}>{notification.date}</Text>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{notification.text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 25,
    color: colors["lightBlack"],
    fontFamily: "sans-serif-medium",
    top: -25,
    textTransform: "capitalize",
  },
  text: {
    textAlign: "center",
    color: colors["medium"],
    fontSize: 20,
    fontFamily: "sans-serif-light",
    lineHeight: 25,
  },
  textContainer: {
    paddingHorizontal: 5,
  },
  date: {
    color: colors["primary"],
    fontFamily: "sans-serif-medium",
    fontSize: 15,
    top: -20,
  },
});

export default ViewNotificationsScreen;

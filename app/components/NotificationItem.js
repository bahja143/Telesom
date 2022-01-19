import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

import colors from "../config/colors";

const NotificationItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.iconContainer}>
        <Feather
          name="bell"
          size={32}
          color={item.visible ? colors["medium"] : colors["primary"]}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text numberOfLines={1} style={styles.subTitle}>
          {item.text}
        </Text>
        <Text
          style={[
            styles.date,
            { color: item.visible ? colors["medium"] : colors["primary"] },
          ]}
        >
          {item.date}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors["white"],
    width: "100%",
    height: 90,
    alignItems: "center",
    flexDirection: "row",
  },
  iconContainer: {
    backgroundColor: colors["light"],
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 25,
  },
  textContainer: {
    marginLeft: 12,
  },
  title: {
    color: colors["lightBlack"],
    fontSize: 18,
    textTransform: "capitalize",
  },
  subTitle: {
    color: colors["medium"],
    width: 225,
    textTransform: "capitalize",
  },
  date: {
    color: colors["secondary"],
    fontSize: 12,
    marginTop: 7,
  },
});
export default NotificationItem;

import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import colors from "../config/colors";

const CenterItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Ionicons name="location-sharp" size={45} color={colors["primary"]} />
      <View style={styles.textContainer}>
        <Text style={styles.title} numberOfLines={1}>
          {item.name}
        </Text>
        <Text style={styles.subText} numberOfLines={1}>
          {item.address}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors["white"],
    height: 75,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 20,
  },
  textContainer: {
    paddingLeft: 5,
  },
  title: {
    fontSize: 18,
    fontFamily: "sans-serif-medium",
    color: colors["lightBlack"],
    textTransform: "capitalize",
    width: 275,
  },
  subText: {
    color: colors["medium"],
    marginTop: 4,
    width: 300,
  },
});

export default CenterItem;

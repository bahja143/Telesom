import React from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Swipeable from "react-native-gesture-handler/Swipeable";

import RenderDeleteAction from "./RenderDeleteAction";

import colors from "../config/colors";

const DhambaalItem = ({ title, subtitle, onDelete, onPress }) => {
  return (
    <Swipeable
      renderRightActions={() => <RenderDeleteAction onPress={onDelete} />}
    >
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.container}>
          <FontAwesome name="envelope" color={colors["primary"]} size={35} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors["light"],
    width: "100%",
    height: 70,
    alignItems: "center",
    paddingLeft: 25,
    flexDirection: "row",
  },
  textContainer: {
    marginLeft: 15,
  },
  title: {
    fontSize: 17,
    color: colors["lightBlack"],
    fontFamily: "sans-serif-medium",
  },
  subtitle: {
    color: colors["medium"],
  },
});

export default DhambaalItem;

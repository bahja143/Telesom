import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

const ValueServiceItem = ({ icon, title, text, price, onPress, on }) => {
  const [open, setOpen] = useState(false);

  const handleTextOpen = () => {
    open ? setOpen(false) : setOpen(true);
  };

  return (
    <TouchableOpacity
      style={[styles.container, open ? { height: 200 } : { height: 125 }]}
      onPress={handleTextOpen}
    >
      <MaterialCommunityIcons
        name={icon}
        color={colors.primary}
        size={35}
        style={styles.icon}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        <Text style={styles.text} numberOfLines={open ? 0 : 2}>
          {text}
        </Text>
        <Text style={styles.priceText}>
          <Text style={styles.price}>{price} </Text>/Month
        </Text>
      </View>
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={[styles.btn, on ? styles.btnOn : styles.btnOff]}>
          <Text style={on ? styles.btnTextOn : styles.btnTextOff}>
            {on ? "On" : "Off"}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors["light"],
    width: "100%",
    flexDirection: "row",
  },
  icon: {
    paddingTop: 20,
    left: 20,
  },
  title: {
    paddingTop: 10,
    fontSize: 17,
    width: 250,
    fontFamily: "sans-serif-medium",
  },
  text: {
    color: colors["black"],
    fontSize: 16,
    width: 250,
    fontFamily: "sans-serif-light",
  },
  textContainer: {
    flex: 1,
    left: 30,
  },
  btn: {
    backgroundColor: colors["white"],
    marginRight: 23,
    top: 25,
    width: 50,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors["medium"],
  },
  btnOff: {
    backgroundColor: colors["white"],
  },
  btnOn: {
    backgroundColor: colors["primary"],
    borderWidth: 0,
  },
  btnTextOn: {
    color: colors["white"],
  },
  btnTextOff: {
    color: colors["black"],
  },
  priceText: {
    marginTop: 10,
    marginBottom: 5,
    color: colors["medium"],
    fontFamily: "sans-serif-medium",
  },
  price: {
    color: colors["primary"],
    fontSize: 14,
    fontWeight: "700",
  },
});

export default ValueServiceItem;

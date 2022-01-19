import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import colors from "../config/colors";

const BundleItem = ({ data, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.dataView}>
        <Text style={styles.data}>{data.data}</Text>
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>{data.price}</Text>
        <Text style={styles.duration}> Valid {data.valid}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors["white"],
    width: "98%",
    height: 59,
    elevation: 2,
    flexDirection: "row",
    marginBottom: 5,
  },
  dataView: {
    backgroundColor: colors["primary"],
    width: "45%",
    height: 59,
    justifyContent: "center",
    alignItems: "center",
  },
  data: {
    color: colors["white"],
    fontWeight: "bold",
    fontSize: 19,
  },
  priceContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  price: {
    color: colors["primary"],
    fontSize: 16,
    fontWeight: "700",
  },
  duration: {
    fontSize: 14,
    color: colors["medium"],
  },
});

export default BundleItem;

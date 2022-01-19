import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNetInfo } from "@react-native-community/netinfo";

import colors from "../config/colors";

const OfflineNotice = () => {
  const info = useNetInfo();

  if (info.type !== "unknown" && info.isInternetReachable === false)
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No network connection</Text>
      </View>
    );

  return null;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors["secondary"],
    alignItems: "center",
    justifyContent: "center",
    height: 35,
  },
  text: {
    color: colors["white"],
  },
});

export default OfflineNotice;

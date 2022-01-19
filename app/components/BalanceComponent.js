import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";

import colors from "../config/colors";

const BalanceComponent = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.balanceText}>Balance</Text>
        <View style={styles.airTime}>
          <Text style={styles.airText}>Airti</Text>
          <Text style={styles.balance}>0</Text>
          <Text style={styles.airText}>US</Text>
        </View>
      </View>

      <View style={styles.items}>
        <View style={styles.item}>
          <View style={styles.iconContainer}>
            <MaterialIcons name="message" size={27} color={colors["white"]} />
          </View>
          <View>
            <Text style={styles.title}>Sms</Text>
            <Text style={styles.subTitle}>
              <Text style={styles.bold}>55</Text> Min
            </Text>
          </View>
          <MaterialCommunityIcons
            name="chevron-right"
            color={colors["primary"]}
            size={25}
            style={styles.chevron}
          />
        </View>

        <View style={styles.item}>
          <View style={styles.iconContainer}>
            <Fontisto name="world-o" size={27} color={colors["white"]} />
          </View>
          <View>
            <Text style={styles.title}>4G</Text>
            <Text style={styles.subTitle}>
              <Text style={styles.bold}>20</Text> KB
            </Text>
          </View>
          <MaterialCommunityIcons
            name="chevron-right"
            color={colors["primary"]}
            size={25}
            style={styles.chevron}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    top: -15,
  },
  airTime: {
    backgroundColor: colors["primary"],
    width: 150,
    height: 150,
    borderRadius: 75,
    justifyContent: "center",
    alignItems: "center",
  },
  airText: {
    color: colors["white"],
    fontFamily: "sans-serif-light",
    fontSize: 16,
    fontWeight: "700",
  },
  balance: {
    fontSize: 38,
    fontFamily: "sans-serif-medium",
    color: colors["white"],
  },
  balanceText: {
    fontSize: 18,
    fontFamily: "sans-serif-light",
    color: colors["lightBlack"],
    marginBottom: 15,
  },
  iconContainer: {
    backgroundColor: colors["primary"],
    width: 47,
    height: 47,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 7,
  },
  item: {
    flexDirection: "row",
  },
  title: {
    fontFamily: "sans-serif-light",
    fontSize: 16,
  },
  subTitle: {
    color: colors["primary"],
    fontSize: 15,
  },
  bold: {
    fontWeight: "700",
    fontFamily: "sans-serif-medium",
  },
  items: {
    height: 125,
    justifyContent: "space-between",
    marginTop: 30,
  },
  chevron: {
    marginLeft: 40,
    top: 25,
  },
});

export default BalanceComponent;

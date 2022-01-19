import React from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import colors from "../config/colors";

const QuickShortcut = ({ navigation }) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Quick Shortcut</Text>
      <View style={styles.container}>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("bundels")}
        >
          <View style={styles.item}>
            <MaterialCommunityIcons
              name="cellphone-wireless"
              size={42.5}
              color={colors["primary"]}
            />
            <Text style={styles.text}>Buy Bundle</Text>
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("datatransfer")}
        >
          <View style={styles.item}>
            <MaterialCommunityIcons
              name="transfer"
              size={42.5}
              color={colors["primary"]}
            />
            <Text style={styles.text}>Data Transfer</Text>
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("Dhambaal")}
        >
          <View style={styles.item}>
            <AntDesign name="message1" size={42.5} color={colors["primary"]} />
            <Text style={styles.text}>Dhambal SMS</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: 130,
    top: -50,
  },
  container: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 25,
  },
  item: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "sans-serif-light",
    fontSize: 14,
    marginTop: 5,
    color: colors["lightBlack"],
  },
  title: {
    fontFamily: "sans-serif-light",
    fontSize: 17,
    marginLeft: 22,
  },
});

export default QuickShortcut;

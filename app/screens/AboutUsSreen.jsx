import React from "react";
import { View, Text, StyleSheet } from "react-native";

import colors from "../config/colors";

const AboutUsSreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        <Text style={styles.emphasis}>Telesom Company </Text> is the leading
        Telecommunication company in Somaliland offering an integrated suite of
        communication products and services to the customers including Voice,
        data and ZAAD service (mobile money Services).
      </Text>

      <Text style={styles.text}>
        <Text style={styles.emphasis}>Telesom Company</Text> is a private
        telecommunication company which was established in the year 2002 by
        local entrepreneurs in Hargeisa Somaliland to become the leader and
        pioneer in telecommunication sector while utilizing the latest
        technology and employing a highly trained and professional customer care
        team that satisfy our customers with world class services.
      </Text>
      <Text style={styles.line}>
        {" "}
        {
          "                                                                                             "
        }
      </Text>
      <Text style={styles.version}>Version 1.0.0</Text>
      <Text style={styles.powered}>Powered by</Text>
      <Text style={styles.logo}>Telesom Company</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors["white"],
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 25,
  },
  text: {
    textAlign: "left",
    fontFamily: "sans-serif-light",
    fontSize: 20,
    marginTop: 25,
    color: colors["lightBlack"],
  },
  emphasis: {
    fontWeight: "700",
    color: colors["black"],
  },
  line: {
    borderColor: colors["light"],
    borderBottomWidth: 2,
  },
  version: {
    marginTop: 10,
    color: colors["secondary"],
    fontFamily: "sans-serif-light",
    fontSize: 16,
  },
  powered: {
    fontFamily: "sans-serif-medium",
    fontSize: 19,
    marginTop: 15,
    color: colors["lightBlack"],
  },
  logo: {
    color: colors["primary"],
    fontSize: 20,
    fontFamily: "sans-serif-medium",
  },
});

export default AboutUsSreen;

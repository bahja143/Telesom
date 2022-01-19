import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import BkImage from "../assets/BK.png";
import Button from "../components/Button";
import colors from "../config/colors";

const WellcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageBack}>
        <Image source={BkImage} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          <Text style={styles.textColorBorder}>Telesom</Text> Is The Leading{" "}
          <Text style={styles.textColor}>Telecommunication</Text> Company In
          Somaliland!
        </Text>
        <Text style={styles.subtitle}>The Reliable Choice</Text>
      </View>
      <View style={styles.actionContainer}>
        <Button title="SIGN IN" onPress={() => navigation.navigate("signIn")} />
        <Button
          title="JOIN NOW"
          color="secondary"
          onPress={() => navigation.navigate("registerNow")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors["white"],
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 275,
    height: 275,
    marginBottom: 30,
    top: 11.5,
    right: 25,
  },
  text: {
    textAlign: "center",
    fontSize: 25,
    width: 375,
    lineHeight: 35,
    fontWeight: "700",
    color: colors["lightBlack"],
    fontFamily: "sans-serif-light",
  },
  textColor: {
    color: colors["secondary"],
  },
  imageBack: {
    backgroundColor: colors["primary"],
    width: 270,
    height: 270,
    borderRadius: 200,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 60,
  },
  subtitle: {
    color: colors["primary"],
    fontSize: 17,
    marginTop: 12,
    fontFamily: "sans-serif-medium",
    left: -5,
  },
  actionContainer: {
    width: "100%",
    paddingHorizontal: 15,
    height: 130,
    justifyContent: "space-between",
    top: -25,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    top: -50,
  },
  textColorBorder: {
    color: colors["primary"],
  },
});

export default WellcomeScreen;

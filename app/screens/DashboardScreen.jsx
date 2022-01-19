import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

import ImagesSlide from "../components/ImagesSlide";
import ProfileDashboard from "../components/ProfileDashboard";
import BalanceComponent from "../components/BalanceComponent";
import QuickShortcut from "../components/QuickShortcut";

const initialImages = [
  require("../assets/1.jpeg"),
  require("../assets/2.jpeg"),
  require("../assets/3.jpeg"),
];

const DashboardScreen = ({ navigation }) => {
  const [images] = useState(initialImages);

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <ProfileDashboard />
      </View>
      <ImagesSlide images={images} />
      <BalanceComponent />
      <QuickShortcut navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: 150,
  },
  profile: {
    marginTop: 20,
  },
  balance: {
    top: -25,
  },
});

export default DashboardScreen;

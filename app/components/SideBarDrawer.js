import React from "react";
import { View, StyleSheet } from "react-native";

import SideBarHeader from "./SideBarHeader";
import SideBarBody from "./SideBarBody";
import SideBarFooter from "./SideBarFooter";

const SideBarDrawer = () => {
  return (
    <View style={styles.container}>
      <SideBarHeader />
      <SideBarBody />
      <SideBarFooter />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SideBarDrawer;

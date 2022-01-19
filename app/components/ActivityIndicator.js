import React from "react";
import LottieView from "lottie-react-native";
import { Modal, StyleSheet, View } from "react-native";

const ActivityIndicator = ({ visible }) => {
  if (!visible) return null;

  return (
    <Modal animationType="" transparent>
      <View style={styles.container}>
        <LottieView
          loop={true}
          autoPlay
          source={require("../assets/Animations/loader.json")}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(102, 102, 102, 0.48)",
  },
});

export default ActivityIndicator;

import React from "react";

import { View, StyleSheet } from "react-native";

const FormGroup = ({ children, margin }) => {
  return (
    <View style={[styles.container, { marginVertical: margin }]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: -15,
    width: "100%",
  },
});

export default FormGroup;

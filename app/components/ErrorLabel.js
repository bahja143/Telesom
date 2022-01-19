import React from "react";
import { Text, StyleSheet } from "react-native";

import colors from "../config/colors";

const ErrorLabel = ({ error, touched }) => {
  if (error && touched) return <Text style={styles.errorLabel}>{error}</Text>;

  return <Text style={styles.errorLabel}></Text>;
};

const styles = StyleSheet.create({
  errorLabel: {
    color: colors["danger"],
    fontSize: 15,
    marginTop: -2,
    marginLeft: 10,
  },
});

export default ErrorLabel;

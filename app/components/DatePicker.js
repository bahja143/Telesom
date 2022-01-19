import React from "react";
import DatePickerCom from "react-native-datepicker";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

const DatePicker = ({ value, onChange }) => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="calendar"
        color={colors["medium"]}
        size={25}
        style={styles.icon}
      />
      <DatePickerCom
        showIcon={false}
        style={styles.inputContainer}
        customStyles={{
          dateInput: styles.input,
          dateText: styles.text,
        }}
        onDateChange={(values) => onChange(values)}
        date={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 25,
    backgroundColor: colors["light"],
    alignItems: "center",
    height: 60,
    flexDirection: "row",
    borderRadius: 35,
    alignSelf: "center",
    paddingLeft: 18,
  },
  inputContainer: {
    width: "80%",
  },
  input: {
    backgroundColor: colors["light"],
    borderWidth: 0,
    width: "100%",
    height: 60,
  },
  text: {
    color: colors["lightBlack"],
    fontSize: 20,
    alignSelf: "flex-start",
  },
  icon: {
    marginRight: 7,
  },
});

export default DatePicker;

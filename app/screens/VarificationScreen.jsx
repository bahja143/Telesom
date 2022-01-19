import React, { useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import * as Yup from "yup";

import AuthContext from "../auth/context";
import { Form, TextInput, Submit } from "../components/form";
import colors from "../config/colors";

const schema = Yup.object({
  code: Yup.string()
    .min(4, "Code must be atleast 4 numbers")
    .required()
    .label("Code"),
});

const VarificationScreen = () => {
  const [data] = useState({ code: "" });
  const { setUser } = useContext(AuthContext);

  const handleSubmit = async (values) => {
    setUser({});
  };

  return (
    <>
      <KeyboardAvoidingView
        behavior="position"
        style={styles.keyboardOffSet}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 90}
      >
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.iconContainer}>
              <FontAwesome5
                name="envelope-open-text"
                size={60}
                color={colors["primary"]}
              />
            </View>
            <Text style={styles.title}>Varification</Text>
            <Text style={styles.subtitle}>
              You will get a OTP via <Text style={styles.bold}>SMS</Text>
            </Text>
          </View>

          <View style={styles.form}>
            <Form
              initialValues={data}
              validationSchema={schema}
              onSubmit={handleSubmit}
            >
              <TextInput
                name="code"
                placeholder="Enter OTP"
                keyboardType="numeric"
                maxLength={4}
                style={styles.code}
              />
              <Submit title="VERIFY" />
            </Form>
          </View>
        </View>
      </KeyboardAvoidingView>

      <Text style={styles.text}>
        Didn't receive the varification OTP?{" "}
        <Text style={styles.resend} onPress={() => console.log("Resend")}>
          Resend again
        </Text>
      </Text>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  iconContainer: {
    backgroundColor: colors["light"],
    width: 125,
    height: 125,
    borderRadius: 75,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  header: {
    marginTop: 75,
  },
  title: {
    textAlign: "center",
    marginTop: 15,
    fontSize: 26,
    color: colors["lightBlack"],
    fontFamily: "sans-serif-medium",
  },
  subtitle: {
    color: colors["medium"],
    fontSize: 18,
    textAlign: "center",
    fontFamily: "sans-serif-light",
    marginTop: 10,
  },
  bold: {
    fontWeight: "700",
  },
  form: {
    width: "100%",
    paddingHorizontal: 15,
    marginTop: 70,
  },
  code: {
    fontSize: 25,
    textAlign: "center",
    letterSpacing: 10,
    width: "100%",
  },
  text: {
    textAlign: "center",
    color: colors["medium"],
    marginTop: 20,
    fontFamily: "sans-serif-light",
    fontSize: 15,
  },
  resend: {
    fontFamily: "sans-serif-medium",
    color: colors["primary"],
  },
});

export default VarificationScreen;

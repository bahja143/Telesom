import React, { useState, useContext, useEffect } from "react";
import { View, Text, Keyboard, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import * as Yup from "yup";

import AuthContext from "../auth/context";
import authApi from "../api/authApi";

import { Form, TextInput, Submit } from "../components/form";
import ActivityIndicator from "../components/ActivityIndicator";
import colors from "../config/colors";

const schema = Yup.object({
  code: Yup.string()
    .min(4, "Code must be atleast 4 numbers")
    .required()
    .label("Code"),
});

const VarificationScreen = ({ route }) => {
  const phone = route.params;
  const [data] = useState({ code: "" });
  const [erorr, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const { setUser } = useContext(AuthContext);

  const handleSubmit = async (values) => {
    Keyboard.dismiss();

    setError(false);
    setLoading(true);
    const response = await authApi.verify({
      phone: "+25263" + phone,
      code: values.code,
    });
    setLoading(false);

    if (response.ok) return setUser({});

    setError(true);
  };
  const handleSendVarification = async () => {
    await authApi.sendVerification({
      phone: "+25263" + phone,
      code: "4400",
    });
  };
  const reSendVarification = async () => {
    setLoading(true);
    await authApi.sendVerification(phone);
    setLoading(false);
  };

  useEffect(() => {
    handleSendVarification();
  }, []);
  return (
    <>
      <ActivityIndicator visible={loading} />
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
              errorMessages="Invalid code"
              erorr={erorr}
            />
            <Submit title="VERIFY" />
          </Form>
        </View>

        <Text style={styles.text}>
          Didn't receive the varification OTP?{" "}
          <Text style={styles.resend} onPress={reSendVarification}>
            Resend again
          </Text>
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
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
    top: -50,
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

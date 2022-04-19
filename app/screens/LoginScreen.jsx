import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  Keyboard,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import * as Yup from "yup";

import Logo from "../assets/Logo.jpeg";
import { Form, InputText2, Submit } from "../components/form";

const schema = Yup.object({
  tellphone: Yup.string()
    .min(7, "Tellphone must be 7 numbers")
    .required()
    .label("Tellphone"),
});

const LoginScreen = ({ navigation }) => {
  const [login] = useState({ tellphone: "" });

  const handleSubmit = async (values) => {
    Keyboard.dismiss();

    navigation.navigate("varification", values.tellphone);
  };

  return (
    <>
      <View style={styles.container}>
        <KeyboardAvoidingView
          keyboardVerticalOffset={Platform.OS === "ios" ? 85 : -100}
          behavior="position"
        >
          <Image source={Logo} style={styles.logo} />
          <Form
            initialValues={login}
            validationSchema={schema}
            onSubmit={handleSubmit}
          >
            <InputText2 label="063" name="tellphone" placeholder="64xxxxx" />
            <Submit title="LOGIN" />
          </Form>
        </KeyboardAvoidingView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 15,
  },
  logo: {
    width: 300,
    height: 175,
    alignSelf: "center",
    marginBottom: 30,
  },
  keyboardOffSet: {
    flex: 1,
  },
  error: {
    justifyContent: "center",
    alignItems: "center",
    top: -10,
  },
});

export default LoginScreen;

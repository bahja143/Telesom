import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from "react-native";
import * as Yup from "yup";

import Logo from "../assets/Logo.jpeg";
import { Form, InputText2, Submit } from "../components/form";
import ErrorLabel from "../components/ErrorLabel";
import LottieView from "../components/ActivityIndicator";
import authApi from "../auth/auth";

const schema = Yup.object({
  tellphone: Yup.string()
    .min(7, "Tellphone must be 7 numbers")
    .required()
    .label("Tellphone"),
});

const LoginScreen = ({ navigation }) => {
  const [login] = useState({ tellphone: "" });
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values) => {
    Keyboard.dismiss();

    // setLoading(true);
    // const { data } = await authApi.login(values.tellphone);
    // setLoading(false);

    // if (data === null) return setError(true);

    // setError(false);
    navigation.navigate("varification");
  };

  return (
    <>
      <LottieView visible={loading} />
      <KeyboardAvoidingView
        behavior="position"
        style={styles.keyboardOffSet}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : -170}
      >
        <View style={styles.container}>
          <Image source={Logo} style={styles.logo} />
          <View style={styles.error}>
            <ErrorLabel
              touched={error}
              error="This phone number doesn't exist"
            />
          </View>
          <Form
            initialValues={login}
            validationSchema={schema}
            onSubmit={handleSubmit}
          >
            <InputText2 label="063" name="tellphone" />
            <Submit title="LOGIN" />
          </Form>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    paddingHorizontal: 15,
    marginTop: 340,
  },
  logo: {
    width: 300,
    height: 175,
    position: "absolute",
    top: -225,
    left: 50,
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

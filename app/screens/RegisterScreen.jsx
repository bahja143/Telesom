import React, { useState } from "react";
import { View, StyleSheet, Keyboard } from "react-native";
import * as Yup from "yup";

import { Form, TextInput, InputText2, Submit } from "../components/form";
import ErrorLabel from "../components/ErrorLabel";
import LottieView from "../components/ActivityIndicator";

import authApi from "../auth/auth";
import usersApi from "../api/users";

const schema = Yup.object({
  Name: Yup.string()
    .min(3, "Name must be atleast 3 characters")
    .required()
    .label("Name"),
  Tellphone: Yup.string()
    .min(7, "Tellphone must be 7 numbers")
    .required()
    .label("Tellphone"),
  Address: Yup.string(),
});

const RegisterScreen = ({ navigation }) => {
  const [data] = useState({ Name: "", Tellphone: "", Address: "" });
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values) => {
    Keyboard.dismiss();

    // setLoading(true);
    // const { data } = await authApi.login(values.Tellphone);

    // if (data) {
    //   setLoading(false);
    //   return setError(true);
    // }

    // setError(false);
    // await usersApi.register(values);
    // setLoading(false);

    navigation.navigate("verification");
  };
  return (
    <>
      <LottieView visible={loading} />
      <View style={styles.container}>
        <View style={styles.error}>
          <ErrorLabel
            error="This Phone number already exist!"
            touched={error}
          />
        </View>
        <Form
          initialValues={data}
          validationSchema={schema}
          onSubmit={handleSubmit}
        >
          <TextInput name="Name" icon="account" placeholder="Name" />
          <InputText2
            name="Tellphone"
            icon="cellphone"
            placeholder="Tellphone number"
            keyboardType="numeric"
            label="063"
          />
          <TextInput
            name="Address"
            icon="directions-fork"
            placeholder="Address"
          />
          <Submit title="Register" />
        </Form>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 25,
  },
  error: {
    justifyContent: "center",
    alignItems: "center",
    top: -8,
  },
});

export default RegisterScreen;

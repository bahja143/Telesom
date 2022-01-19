import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as Yup from "yup";

import colors from "../config/colors";
import { Form, TextInput1, Submit } from "../components/form";

const schema = Yup.object({
  name: Yup.string().required().label("Name"),
  email: Yup.string().email().label("Email"),
  address: Yup.string().label("Address"),
});

const ProfileScreen = () => {
  const [profile] = useState({
    name: "Bashier Mohamud Abdullahi",
    email: "Bashka4u@gmail.com",
    address: "Kuallalampur Malaysia",
  });
  const [edit, setEdit] = useState(false);

  const handleSubmit = (values) => {
    setEdit(false);
    console.log(values);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header} />
      <KeyboardAvoidingView
        behavior="position"
        style={styles.keyboardOffSet}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : -75}
      >
        <View style={styles.card}>
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons
              name="account"
              size={125}
              color={colors["white"]}
            />
          </View>
          <Text style={styles.title}>Bashier Mohamud Abdullahi</Text>
          <TouchableOpacity style={styles.btn} onPress={() => setEdit(true)}>
            <Text style={styles.btnText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.form}>
          <Form
            initialValues={profile}
            onSubmit={handleSubmit}
            validationSchema={schema}
          >
            {edit && (
              <TextInput1
                name="name"
                label="Name"
                editable={edit}
                autoCapitalize="words"
              />
            )}
            <TextInput1
              name="email"
              label="Email"
              editable={edit}
              keyboardType="email-address"
            />
            <TextInput1
              name="address"
              label="Address"
              editable={edit}
              autoCapitalize="words"
            />
            {edit && <Submit title="Save" />}
          </Form>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: colors["primary"],
    width: "100%",
    height: 200,
  },
  card: {
    backgroundColor: colors["white"],
    width: "87%",
    height: 300,
    alignSelf: "center",
    elevation: 2,
    top: -165,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainer: {
    backgroundColor: colors["light"],
    width: 130,
    height: 130,
    borderRadius: 80,
    justifyContent: "center",
    alignItems: "center",
    top: -30,
  },
  title: {
    fontSize: 21,
    color: colors["primary"],
    fontFamily: "sans-serif-medium",
    top: -10,
  },
  btn: {
    backgroundColor: colors["primary"],
    width: 120,
    height: 35,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    color: colors["white"],
    fontFamily: "sans-serif-medium",
    fontSize: 15,
  },
  form: {
    backgroundColor: colors["white"],
    paddingHorizontal: 25,
    top: -150,
  },
});

export default ProfileScreen;

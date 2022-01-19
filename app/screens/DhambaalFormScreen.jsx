import React, { useState } from "react";
import * as Yup from "yup";
import { View, StyleSheet } from "react-native";

import {
  Form,
  PickerComponent,
  TextInput,
  Submit,
  AudioInput,
  FormGroup,
} from "../components/form";

const schema = Yup.object({
  name: Yup.string().min(3).required().label("Name"),
  audio: Yup.object().required().label("Audio"),
  group: Yup.number().required().label("Group"),
});

const DhambaalFormScreen = () => {
  const [data] = useState({ name: "", audio: "", group: "" });
  const [groups] = useState([
    { id: 1, name: "Business" },
    { id: 2, name: "Awarness" },
    { id: 3, name: "Education" },
  ]);

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Form
      initialValues={data}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <View style={styles.container}>
        <FormGroup margin={-20}>
          <TextInput name="name" placeholder="Name" icon="message" />
        </FormGroup>
        <FormGroup margin={20}>
          <AudioInput name="audio" />
        </FormGroup>
        <FormGroup>
          <PickerComponent
            name="group"
            label="Group"
            data={groups}
            icon="account-group"
          />
        </FormGroup>
        <Submit title="Create" />
      </View>
    </Form>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 15,
    height: 175,
    marginTop: 75,
    justifyContent: "space-between",
  },
});

export default DhambaalFormScreen;

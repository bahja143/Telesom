import React, { useState } from "react";
import { View, StyleSheet, Modal, TouchableOpacity } from "react-native";
import * as Yup from "yup";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import { TextInput, DatePicker, Submit, Form } from "../components/form";

const schema = Yup.object({
  date: Yup.date().required(),
  address: Yup.string().required(),
  description: Yup.string().required(),
});

const BookingModal = ({ show, setShow, booked }) => {
  const [booking, setBooking] = useState({
    date: new Date(),
    address: "",
    description: "",
  });

  const handleSubtmit = (values) => {
    console.log(values);
    setBooking(values);
    setShow(false);
  };
  return (
    <Modal visible={show} animationType="" transparent>
      <View style={styles.modal}>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => setShow(false)}
        >
          <MaterialCommunityIcons
            name="close"
            color={colors["primary"]}
            size={30}
          />
        </TouchableOpacity>
        <View style={styles.container}>
          <Form
            initialValues={booking}
            validationSchema={schema}
            onSubmit={handleSubtmit}
          >
            <DatePicker icon="calendar" name="date" placeholder="Date" />
            <TextInput icon="highway" name="address" placeholder="Address" />
            <TextInput
              icon="pen"
              name="description"
              placeholder="Description"
            />
            <Submit title="Book Now" />
          </Form>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: "rgba(102, 102, 102, 0.6)",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    backgroundColor: colors["white"],
    width: "90%",
    height: 400,
    borderRadius: 10,
    justifyContent: "space-evenly",
    paddingHorizontal: 10,
    paddingVertical: 30,
    paddingTop: 45,
  },
  iconContainer: {
    backgroundColor: colors["light"],
    height: 38,
    width: 38,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    top: 48,
    zIndex: 1,
    right: -150,
  },
});

export default BookingModal;

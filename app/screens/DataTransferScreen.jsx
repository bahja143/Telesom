import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import * as Yup from "yup";

import { TextInput, Submit, PickerComponent, Form } from "../components/form";
import colors from "../config/colors";

const schema = Yup.object({
  bundleType: Yup.number().required().label("Bundle type"),
  // price: Yup.number().when(["bundleType"], {
  //   is: 1,
  //   then: Yup.number(),
  //   otherwise: Yup.number().required().label("Price"),
  // }),
  number: Yup.number().required().label("Tellphone number"),
  amount: Yup.number().required().label("Amount of data"),
});

const DataTransfer = () => {
  const [data] = useState({
    bundleType: "",
    // price: "",
    number: "",
    amount: "",
  });
  const [bundles] = useState([
    { id: 1, name: "Monthly" },
    { id: 2, name: "Weekly" },
    { id: 3, name: "Daily" },
  ]);
  const [daily] = useState([
    { id: 1, price: "$0.25" },
    { id: 2, price: "$0.5" },
    { id: 3, price: "$1" },
    { id: 4, price: "$2" },
    { id: 5, price: "$3" },
    { id: 6, price: "$5" },
  ]);
  const [weekly] = useState([
    { id: 1, price: 0.12 },
    { id: 2, price: 0.25 },
    { id: 3, price: 0.5 },
    { id: 4, price: 1 },
    { id: 5, price: 2 },
    { id: 6, price: 3 },
  ]);
  const [bundleType, setBundleType] = useState();

  return (
    <View style={styles.container}>
      <Form
        initialValues={data}
        onSubmit={(values) => console.log(values)}
        validationSchema={schema}
      >
        <PickerComponent
          name="bundleType"
          data={bundles}
          label="Bundle Type"
          icon="apps"
          width="100%"
          setSelected={setBundleType}
        />
        {/* {bundleType === 2 || bundleType === 3 ? (
          <PickerComponent
            name="price"
            data={
              bundleType === 2
                ? weekly.map((r) => {
                    r.name = r.price;

                    return r;
                  })
                : daily.map((r) => {
                    r.name = r.price;

                    return r;
                  })
            }
            label="Bundle Price"
            icon="currency-usd"
            width="100%"
            setSelected={(item) => console.log(item)}
          />
        ) : null} */}
        <TextInput
          name="number"
          placeholder="Phone number"
          icon="cellphone"
          keyboardType="numeric"
        />
        <TextInput
          name="amount"
          placeholder="Data"
          icon="call-made"
          keyboardType="numeric"
        />
        <Submit title="Transfer" />
      </Form>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors["white"],
    height: 275,
    justifyContent: "space-between",
    marginHorizontal: 15,
    marginTop: 25,
  },
});

export default DataTransfer;

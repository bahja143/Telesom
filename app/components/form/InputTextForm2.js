import React from "react";
import { useFormikContext } from "formik";
import { StyleSheet, View } from "react-native";

import TextInput1 from "../InputText2";
import ErrorLabel from "../ErrorLabel";

const TextInputForm2 = ({ name, ...otherProps }) => {
  const { handleChange, values, errors, touched, setFieldTouched } =
    useFormikContext();

  return (
    <>
      <TextInput1
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        {...otherProps}
        value={values[name]}
      />
      <View style={styles.errorLabel}>
        <ErrorLabel touched={touched[name]} error={errors[name]} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  errorLabel: {
    left: 7,
  },
});

export default TextInputForm2;

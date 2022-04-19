import React from "react";
import { useFormikContext } from "formik";
import { StyleSheet, Text } from "react-native";

import TextInput from "../InputText";
import ErrorLabel from "../ErrorLabel";
import colors from "../../config/colors";

const TextInputForm = ({ name, erorr, errorMessages, ...otherProps }) => {
  const { handleChange, values, errors, touched, setFieldTouched } =
    useFormikContext();

  return (
    <>
      <TextInput
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        {...otherProps}
        value={values[name]}
      />
      {erorr ? (
        <Text style={styles.errorLabel}>{errorMessages}</Text>
      ) : (
        <ErrorLabel touched={touched[name]} error={errors[name]} />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  errorLabel: {
    color: colors["danger"],
    fontSize: 15,
    marginTop: -2,
    marginLeft: 10,
  },
});

export default TextInputForm;

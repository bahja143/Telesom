import React from "react";
import { useFormikContext } from "formik";

import TextInput from "../InputText";
import ErrorLabel from "../ErrorLabel";

const TextInputForm = ({ name, ...otherProps }) => {
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
      <ErrorLabel touched={touched[name]} error={errors[name]} />
    </>
  );
};

export default TextInputForm;

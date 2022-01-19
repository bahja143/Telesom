import React from "react";
import { useFormikContext } from "formik";

import TextInput1 from "../InputText1";
import ErrorLabel from "../ErrorLabel";

const TextInputForm = ({ name, ...otherProps }) => {
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
      <ErrorLabel touched={touched[name]} error={errors[name]} />
    </>
  );
};

export default TextInputForm;

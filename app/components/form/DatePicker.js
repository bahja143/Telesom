import React from "react";
import { useFormikContext } from "formik";

import DatePickerCom from "../DatePicker";
import ErrorLabel from "../ErrorLabel";

const DatePicker = ({ name }) => {
  const { setFieldValue, values, errors, touched } = useFormikContext();

  const hanldeChange = (value) => {
    setFieldValue(name, value);
  };

  return (
    <>
      <DatePickerCom value={values[name]} onChange={hanldeChange} />
      <ErrorLabel touched={touched[name]} error={errors[name]} />
    </>
  );
};

export default DatePicker;

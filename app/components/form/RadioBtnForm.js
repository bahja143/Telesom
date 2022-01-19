import React from "react";
import { useFormikContext } from "formik";

import RadioBtn from "../RadioBtn";

const RadioBtnForm = ({ ...otherProps }) => {
  const { values } = useFormikContext();

  return <RadioBtn {...otherProps} />;
};

export default RadioBtnForm;

import React from "react";
import { useFormikContext } from "formik";

import Button from "../Button";

const ButtonSubmit = ({ ...otherProps }) => {
  const { handleSubmit } = useFormikContext();

  return <Button onPress={handleSubmit} {...otherProps} />;
};

export default ButtonSubmit;

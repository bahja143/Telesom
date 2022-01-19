import React from "react";
import { useFormikContext } from "formik";

import Audio from "../Audio";

const AudioInput = ({ name }) => {
  const { setFieldValue, values } = useFormikContext();

  const handleSelect = (audio) => {
    setFieldValue(name, audio);
  };

  return <Audio audio={values[name]} setAudio={handleSelect} />;
};

export default AudioInput;

import React from "react";
import { useFormikContext } from "formik";

import ErrorLabel from "../ErrorLabel";
import PickerComponent from "../PickerComponent";

const PickerComponentForm = ({
  name,
  data,
  label,
  icon,
  width = "100%",
  setSelected,
}) => {
  const { setFieldValue, values, errors, touched } = useFormikContext();

  const handleSelect = (item) => {
    setFieldValue(name, item.id);
    setSelected && setSelected(item.id);
  };

  return (
    <>
      <PickerComponent
        data={data}
        label={label}
        icon={icon}
        width={width}
        selected={data.find((d) => d.id === values[name])}
        setSelected={handleSelect}
      />
      <ErrorLabel touched={touched[name]} error={errors[name]} />
    </>
  );
};

export default PickerComponentForm;

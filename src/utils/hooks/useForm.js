import { useState } from "react";

export default function useForm(inputValue) {
  const [value, setValue] = useState(inputValue);

  const reset = () => {
    setValue(inputValue);
  };

  const handleChange = (evt) => {
    setValue(evt.target.value);
  };
  return { value, setValue, reset, handleChange };
}

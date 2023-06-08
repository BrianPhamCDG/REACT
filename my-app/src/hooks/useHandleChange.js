import { useState } from "react";

export default function useHandleChange(initialValues) {
  const [data, setData] = useState(initialValues);
  const handleChange = (e) => {
    console.log(e.target.name);
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return {
    data,
    handleChange,
  };
}

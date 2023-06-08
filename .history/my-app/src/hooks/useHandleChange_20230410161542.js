import { useState } from "react";

export default function useHandleChange() {
  const [data, setData] = useStatetate({
    fullname: "",
    email: "",
  });
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

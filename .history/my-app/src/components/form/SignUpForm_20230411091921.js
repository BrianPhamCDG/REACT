import React from "react";
import { useFormik } from "formik";

const SignUpForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
    },
  });
  return (
    <div className="p-10 mx-auto w-full max-w-[500px]">
      <div className="flex-col flex max-w-[300px] gap-2">
        <label htmlFor="firstName" className="font-medium">
          Firstname
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="Enter Your Firstname"
          className="border p-4 rounded-md"
        />
      </div>
      <div className="w-full mt-4">
        <button className="w-full bg-blue-600 text-white p-3">Submit</button>
      </div>
    </div>
  );
};

export default SignUpForm;

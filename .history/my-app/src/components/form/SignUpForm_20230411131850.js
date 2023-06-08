import React from "react";
import { useFormik } from "formik";

const validate = (values) => {
  const error = {
    if (!value.firstName) {
      error.firstName: 'Require'
    }
  };
  return error;
};

const SignUpForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  console.log(formik);
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="p-10 mx-auto w-full max-w-[500px]"
    >
      <div className="flex-col flex max-w-[500px] gap-2">
        <label htmlFor="firstName" className="font-medium">
          Firstname
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="Enter Your Firstname"
          className="border p-4 rounded-md"
          value={formik.values.firstName}
          onChange={formik.handleChange}
        />
      </div>
      <div className="w-full mt-8">
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default SignUpForm;

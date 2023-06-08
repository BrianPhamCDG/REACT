import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

// const validate = (values) => {
//   const error = {};
//   if (!values.firstName) {
//     error.firstName = "Require";
//   } else if (values.firstName.length > 20) {
//     error.firstName = "Name must be 20 characters or less";
//   }
//   return error;
// };

const SignUpForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(20, "Name must be 20 characters or less")
        .required("Require"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  console.log(formik);
  return (
    <div className="flex flex-col mx-auto w-full max-w-[500px] p-10 gap-8">
      <form onSubmit={formik.handleSubmit} className="w-full">
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
            onBlur={formik.handleBlur}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <div className="text-sm text-red-500">
              {formik.errors.firstName}
            </div>
          ) : null}
        </div>
      </form>
      <form onSubmit={formik.handleSubmit} className="w-full">
        <div className="flex-col flex max-w-[500px] gap-2">
          <label htmlFor="lastName" className="font-medium">
            Lastname
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Enter Your Lastname"
            className="border p-4 rounded-md"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.lastName && formik.errors.firstName ? (
            <div className="text-sm text-red-500">
              {formik.errors.firstName}
            </div>
          ) : null}
        </div>
      </form>
      <div className="w-full">
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default SignUpForm;

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignupFormFinal = () => {
  return (
    <Formik
      initialValues={{ firstName: "", lastName: "" }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(20, "Must be 20 character or less")
          .required(),
        lasttName: Yup.string()
          .max(12, "Must be 12 character or less")
          .required(),
      })}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form className="flex flex-col mx-auto w-full max-w-[500px] p-10 gap-8">
        <div className="flex-col flex max-w-[500px] gap-2">
          <label htmlFor="firstName" className="font-medium">
            Firstname
          </label>
          <Field
            type="text"
            id="firstName"
            placeholder="Enter Your Firstname"
            className="border p-4 rounded-md"
          />
          <ErrorMessage name="firstName" />
        </div>
        <div className="flex-col flex max-w-[500px] gap-2">
          <label htmlFor="lastName" className="font-medium">
            Lastname
          </label>
          <Field
            type="text"
            id="lastName"
            placeholder="Enter Your Lastname"
            className="border p-4 rounded-md"
          />
          <ErrorMessage name="lastName" />
        </div>
      </Form>
      <div className="w-full">
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded"
        >
          Submit
        </button>
      </div>
    </Formik>
  );
};

export default SignupFormFinal;

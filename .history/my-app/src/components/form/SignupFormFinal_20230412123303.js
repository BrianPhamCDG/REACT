import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignupFormFinal = () => {
  return (
    <Formik className="flex flex-col mx-auto w-full max-w-[500px] p-10 gap-8">
      <Form className="w-full">
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
      </Form>
      <Form className="w-full">
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

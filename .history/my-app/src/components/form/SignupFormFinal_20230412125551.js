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
        lastName: Yup.string()
          .max(12, "Must be 12 character or less")
          .required(),
        email: Yup.string().max(20, "Must be 20 character or less").required(),
        intro: Yup.string().max(250, "Must be 250 character or less"),
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
            name="firstName"
            placeholder="Enter Your Firstname"
            className="border p-4 rounded-md"
          />
          <div className="text-sm text-red-500">
            <ErrorMessage name="firstName"></ErrorMessage>
          </div>
        </div>
        <div className="flex-col flex max-w-[500px] gap-2">
          <label htmlFor="lastName" className="font-medium">
            Lastname
          </label>
          <Field
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Enter Your Lastname"
            className="border p-4 rounded-md"
          />
          <div className="text-sm text-red-500">
            <ErrorMessage name="lastName"></ErrorMessage>
          </div>
        </div>
        <div className="flex-col flex max-w-[500px] gap-2">
          <label htmlFor="email" className="font-medium">
            Lastname
          </label>
          <Field
            type="text"
            id="email"
            name="email"
            placeholder="Enter Your email address"
            className="border p-4 rounded-md"
          />
          <div className="text-sm text-red-500">
            <ErrorMessage name="email"></ErrorMessage>
          </div>
        </div>

        <div className="w-full">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded"
          >
            Submit
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default SignupFormFinal;

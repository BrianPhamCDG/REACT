import React from "react";
import { Formik, Form, Field, ErrorMessage, useField } from "formik";
import * as Yup from "yup";

const SignupFormFinal = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        intro: "",
        job: "",
        terms: false,
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(20, "*Must be 20 character or less")
          .required("*First Name is a required field"),
        lastName: Yup.string()
          .max(12, "*Must be 12 character or less")
          .required("*Last Name is a required field"),
        email: Yup.string()
          .max(20, "*Must be 20 character or less")
          .required("*Email is a required field")
          .email(),
        intro: Yup.string().max(250, "Must be 250 character or less"),
        terms: Yup.boolean(),
      })}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form className="flex flex-col mx-auto w-full max-w-[500px] p-10 gap-8 shadow-md rounded-md">
        <MyInput
          label="First name"
          name="firstName"
          placeholder="Enter your first name"
          id="firstName"
        ></MyInput>
        <MyInput
          label="Last name"
          name="lastName"
          placeholder="Enter your last name"
          id="lastName"
        ></MyInput>
        <div className="flex-col flex gap-2">
          <label htmlFor="email" className="font-medium">
            Email
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

        <div className="flex-col flex gap-2">
          <label htmlFor="intro" className="font-medium">
            Intro
          </label>
          <Field
            as="textarea"
            id="intro"
            name="intro"
            placeholder="Introduce yourself..."
            className="border p-4 rounded-md resize-none h-[250px]"
          />
          <div className="text-sm text-red-500">
            <ErrorMessage name="intro"></ErrorMessage>
          </div>
        </div>

        <div className="flex-col flex gap-2">
          <label htmlFor="job" className="font-medium">
            Select your job
          </label>
          <Field
            as="select"
            id="job"
            name="job"
            placeholder="Introduce yourself..."
            className="border p-4 rounded-md"
          >
            <option value="frontend">Frontend Developer</option>
            <option value="sale">Sale man</option>
            <option value="chef">Chef</option>
            <option value="doctor">Doctor</option>
          </Field>
          <div className="text-sm text-red-500">
            <ErrorMessage name="job"></ErrorMessage>
          </div>
        </div>

        <div className="">
          <label
            htmlFor="terms"
            className="flex flex-row font-medium gap-2 items-baseline"
          >
            <Field
              type="checkbox"
              name="terms"
              id="terms"
              className="pr-3"
            ></Field>
            <p>Accept terms and conditions</p>
          </label>

          <div className="text-sm text-red-500">
            <ErrorMessage name="intro"></ErrorMessage>
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

const MyInput = ({ label, ...props }) => {
  const { field, meta } = useField(props);
  console.log(useField(props));
  return (
    <div className="flex-col flex gap-2">
      <label htmlFor={props.id || props.name} className="font-medium">
        {label}
      </label>
      <Field name={props.name} className="border p-4 rounded-md" {...props} />
      <div className="text-sm text-red-500">
        <ErrorMessage name={props.name}></ErrorMessage>
      </div>
    </div>
  );
};

export default SignupFormFinal;

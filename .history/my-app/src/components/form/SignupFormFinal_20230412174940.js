import React from "react";
import { Formik, Form, Field, useField } from "formik";
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
      // validationSchema={Yup.object({
      //   firstName: Yup.string()
      //     .max(20, "*Must be 20 character or less")
      //     .required("*First Name is a required field"),
      //   lastName: Yup.string()
      //     .max(12, "*Must be 12 character or less")
      //     .required("*Last Name is a required field"),
      //   email: Yup.string()
      //     .max(20, "*Must be 20 character or less")
      //     .required("*Email is a required field")
      //     .email(),
      //   intro: Yup.string().max(250, "Must be 250 character or less"),
      //   terms: Yup.boolean().oneOf(
      //     [true],
      //     "Please check the Terms and Conditions"
      //   ),
      // })}
      onSubmit={(values, action) => {
        action.resetForm();
        setTimeout(() => {
          action.setSubmitting(false);
          console.log(values);
        }, 3000);
      }}
    >
      {({ isSubmitting }) => (
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

          <MyInput
            label="Email"
            name="email"
            placeholder="Enter your email address"
            id="email"
          ></MyInput>

          <MyTextarea
            label="Introduce yourself"
            name="intro"
            placeholder="Describe yourself..."
            id="intro"
          ></MyTextarea>

          <MySelectBox id="job" name="job">
            <option value="frontend">Frontend Developer</option>
            <option value="sale">Sale man</option>
            <option value="chef">Chef</option>
            <option value="doctor">Doctor</option>
          </MySelectBox>

          <MyCheckBox
            name="terms"
            id="terms"
            children="Accept terms and conditions"
          ></MyCheckBox>

          <div className="w-full">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded"
              disabled={isSubmitting}
            >
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

const MyInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex-col flex gap-2">
      <label htmlFor={props.id || props.name} className="font-medium">
        {label}
      </label>
      <Field className="border p-4 rounded-md" {...props} {...field} />
      {meta.error && meta.touched ? (
        <div className="text-sm text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};

const MyTextarea = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex-col flex gap-2">
      <label htmlFor={props.id || props.name} className="font-medium">
        Intro
      </label>
      <Field
        as="textarea"
        className="border p-4 rounded-md resize-none h-[250px]"
        {...field}
        {...props}
      />
      {meta.error && meta.touched ? (
        <div className="text-sm text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};

const MySelectBox = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex-col flex gap-2">
      <label htmlFor={props.id || props.name} className="font-medium">
        Select your job
      </label>
      <Field
        as="select"
        className="border p-4 rounded-md"
        {...field}
        {...props}
      />
      {meta.error && meta.touched ? (
        <div className="text-sm text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};

const MyCheckBox = ({ children, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-2">
      <labels className="flex flex-row font-medium gap-2 items-baseline">
        <Field
          type="checkbox"
          checked={field.value}
          className="pr-3"
          {...field}
          {...props}
        />
        {children}
      </labels>

      {meta.error && meta.touched ? (
        <div className="text-sm text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default SignupFormFinal;

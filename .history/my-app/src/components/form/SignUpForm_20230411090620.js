import React from "react";

const SignUpForm = () => {
  return (
    <div className="p-5">
      <div className="flex-col flex max-w-[300px]">
        <label htmlFor="firstName" className="font-semibold">
          Firstname
        </label>
        <input
          type="text"
          id="firstName"
          placeholder="Enter Your Firstname"
          className="border mt-2 p-2"
        />
      </div>
    </div>
  );
};

export default SignUpForm;

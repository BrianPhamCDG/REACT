import React from "react";

const SignUpForm = () => {
  return (
    <div className="p-10 mx-auto w-full max-w-[500px]">
      <div className="flex-col flex max-w-[300px] gap-2">
        <label htmlFor="firstName" className="font-medium">
          Firstname
        </label>
        <input
          type="text"
          id="firstName"
          placeholder="Enter Your Firstname"
          className="border p-4 rounded-sm"
        />
      </div>
    </div>
  );
};

export default SignUpForm;

import React from "react";

const SignUpForm = () => {
  return (
    <div>
      <div className="flex-col flex max-w-[300px]">
        <label htmlFor="firstName">Firstname</label>
        <input
          type="text"
          id="firstName"
          placeholder="Enter Your Firstname"
          className="border"
        />
      </div>
    </div>
  );
};

export default SignUpForm;

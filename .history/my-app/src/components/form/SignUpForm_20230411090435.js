import React from "react";

const SignUpForm = () => {
  return (
    <div>
      <div className="flex-col flex">
        <label htmlFor="firstName">Firstname</label>
        <input type="text" id="firstName" placeholder="Enter Your Firstname" />
      </div>
    </div>
  );
};

export default SignUpForm;

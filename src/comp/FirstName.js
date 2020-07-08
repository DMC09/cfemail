import React from "react";

const FirstName = ({ onChange }) => {
  return (
    <>
      <label htmlFor="">First Name</label>
      <input
        onChange={onChange}
        className="fname_input"
        type="text"
        placeholder="John"
       />
    </>
  );
};

export default FirstName;

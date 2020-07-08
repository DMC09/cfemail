import React from "react";

const LastName = ({onChange}) => {
  return (
    <>
    <label htmlFor="">Last Name</label>
      <input
      onChange={onChange}
      className="lname_input"
      type="text"
      placeholder="Doe"
       />
    </>
  );
};

export default LastName;

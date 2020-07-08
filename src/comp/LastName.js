import React from "react";

const LastName = ({onChange}) => {
  return (
    <>
      <input onChange={onChange} className="lname_input" type="text" />
    </>
  );
};

export default LastName;

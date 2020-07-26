import React, { useState, createContext } from "react";

export const FormContext = createContext();

export const FormProvider = (props) => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [completedInit,setComplete] = useState(null)

  return (
    <FormContext.Provider
      value={[fname, setFname, lname, setLname,completedInit,setComplete]}
    >
      {props.children}
    </FormContext.Provider>
  );
};

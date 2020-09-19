import React, { useState, createContext } from "react";

export const FormContext = createContext();

export const FormProvider = (props) => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [frequency, setFrequency] = useState("");
  const [category, setCategory] = useState("");
  const [completedInit,setComplete] = useState(null)

  return (
    <FormContext.Provider
      value={[completedInit,setComplete,
        fname, setFname,
        lname, setLname,email,
         setEmail,frequency, setFrequency,
         category, setCategory]}>

      {props.children}
    </FormContext.Provider>
  );
};

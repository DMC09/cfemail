import React, { useState, createContext } from "react";

export const FormContext = createContext();

export const FormProvider = (props) => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [uname, setUname] = useState("");
  const [pword, setPword] = useState("");
  const [subscribed, setSubscribe] = useState(null);
  const [completedInit,setComplete] = useState(null)

  return (
    <FormContext.Provider
      value={[completedInit,setComplete,
        fname, setFname,
        lname, setLname,
        email,setEmail,
        uname, setUname,
        pword, setPword,
        subscribed,setSubscribe]}>
      {props.children}
    </FormContext.Provider>
  );
};

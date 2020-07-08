import React, { useState, createContext } from 'react';

export const FormContext = createContext();

export const FormProvider = (props) => {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  return (
    <FormContext.Provider value={[fname, setFname,lname,setLname]}>
      {props.children}
    </FormContext.Provider>
  );
};

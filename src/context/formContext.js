import React, { useState, createContext } from 'react';

export const FormContext = createContext();

export const FormProvider = (props) => {
  const [fname, setFname] = useState('ballsack');
  return (
    <FormContext.Provider value={[fname, setFname]}>
      {props.children}
    </FormContext.Provider>
  );
};

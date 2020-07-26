import React, { useContext, useState } from "react";
import { FormContext } from "../context/formContext";
import InitialForm from "./InitialForm";
import MainForm from "./MainForm";

const FromContainer = () => {
  const [
    fname,
    setFname,
    lname,
    setLname,
    completedInit,
    setComplete,
  ] = useContext(FormContext);
  console.log(completedInit);

  if(completedInit){
    return (

      <MainForm/>

    )
  }
  return (

    <InitialForm/>

  );
};

export default FromContainer;

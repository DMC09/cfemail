import React, { useContext, useState } from "react";
import { FormContext } from "../context/formContext";
import InitialForm from './InitialForm'
import MainForm from './MainForm'


const MainContainer = () => {
  const [
    fname,
    setFname,
    lname,
    setLname,
    completedInit,
    setComplete,
  ] = useContext(FormContext);
return (

<>
<h1>Welcome {fname} {lname}</h1>

{ completedInit ? <MainForm/> : <InitialForm/> }
</>
)
};

export default MainContainer;

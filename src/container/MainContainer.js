import React, { useContext } from "react";
import { FormContext } from "../context/formContext";
import InitialForm from "./InitialForm";
import MainForm from "./MainForm";

const MainContainer = () => {
  const [
    completedInit,
  ] = useContext(FormContext);
  return (
    <>
      {completedInit ? <MainForm /> : <InitialForm />}
    </>
  );
};

export default MainContainer;

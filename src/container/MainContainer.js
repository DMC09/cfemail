import React, { useContext } from "react";
import { FormContext } from "../context/formContext";
import InitialForm from "../components/InitialForm";
import MainForm from "../components/MainForm";
import SuccessPage from "../components/SuccessPage";
import FailurePage from "../components/FailurePage";

const MainContainer = () => {
  const [stage,setStage,] = useContext(FormContext);

  return (
    <>
    <img className="logo" alt="logo" src={require('../images/logo.png')}/>
      {stage === 'initial' &&  <InitialForm /> }
      {stage === 'main' && <MainForm /> }
      {stage === 'success' && <SuccessPage /> }
      {stage === 'failure' && <FailurePage /> }

    </>
  );
};

export default MainContainer;

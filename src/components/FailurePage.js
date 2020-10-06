import React, { useContext } from "react";
import { FormContext } from "../context/formContext";

export default function FailurePage() {

  const [
    stage,setStage,
    fname, setFname,

  ] = useContext(FormContext);


  return (
    <form

      className="form_container"

    >
      <fieldset>
        <h1 className="failure" style={{ textAlign: "center" }}>We apologize for the inconveience {fname}, but your request could not be processed.</h1>
      </fieldset>
    </form>
  );
}

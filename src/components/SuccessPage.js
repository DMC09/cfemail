import React, { useContext } from "react";
import { FormContext } from "../context/formContext";

export default function SuccessPage() {

  const [
    stage,setStage,
    fname, setFname,

  ] = useContext(FormContext);


  return (
    <form

      className="form_container"

    >
      <fieldset>
        <h1 className="success" >Congratulations {fname} you're in! Check your email to confirm access</h1>
        <p className="sub-success" > *Make sure to check your spam folder if you don't see it.</p>
      </fieldset>
    </form>
  );
}

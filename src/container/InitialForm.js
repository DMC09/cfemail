import React, {useContext,useState} from "react";
import { useForm } from "react-hook-form";
import {FormContext} from '../context/formContext';


export default function InitialForm() {
  const [fname, setFname,lname,setLname,completedInit,setComplete] = useContext(FormContext);
  const { register, handleSubmit, watch, errors, getValues } = useForm();


  const onSubmit = (data, e,getValues) => {
    console.log(e)
    const {firstName,lastName} = data
    setFname(firstName.replace(/\b(\w)/g, s => s.toUpperCase()))
    setLname(lastName.replace(/\b(\w)/g, s => s.toUpperCase()))
    setComplete(true)
  }



  return (
    <div className="initform_container">
      <form onSubmit={handleSubmit(onSubmit)}>
      <label>First Name</label>
        <input
          name="firstName"
          ref={register({
            required: true,
            minLength: 1,
            pattern: /^[a-zA-z]+$/,
          })}
        />
        {errors.firstName?.type === "required" && (
          <p className="error">Your input is required</p>
        )}
        {errors.firstName?.type === "minLength" && (
          <p className="error">Your input needs to be at least 1 letter</p>
        )}
        {errors.firstName?.type === "pattern" && (
          <p className="error">please only use letters</p>
        )}
<label>Last Name</label>
        <input
          name="lastName"
          ref={register({
            required: true,
            minLength: 1,
            pattern: /^[a-zA-z]+$/,
          })}
        />

        {errors.lastName?.type === "required" && (
          <p className="error">Your input is required</p>
        )}
        {errors.lastName?.type === "minLength" && (
          <p className="error">Your input needs to be at least 1 letter</p>
        )}
        {errors.lastName?.type === "pattern" && (
          <p className="error">please only use letters</p>
        )}
        <button type="submit"> Submit</button>
      </form>
    </div>
  );
}

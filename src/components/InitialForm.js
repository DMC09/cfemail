import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { FormContext } from "../context/formContext";

export default function InitialForm() {
  const [
    fname,
    setFname,
    lname,
    setLname,
    email,
    setEmail,
    completedInit,
    setComplete,
  ] = useContext(FormContext);
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = async (data) => {
    const { fname, lname, email } = await data;
    await setFname(fname.replace(/\b(\w)/g, (s) => s.toUpperCase()));
    await setLname(lname.replace(/\b(\w)/g, (s) => s.toUpperCase()));
    await setEmail(email);
    await setComplete(true);
  };
  return (
    <form
      noValidate
      className="form_container"
      onSubmit={handleSubmit(onSubmit)}
    >
      <fieldset>
        <h1 className="form_status" style={{ textAlign: "center" }}>Sana beta signup form!</h1>
          <div id="firstName" className=" group">
            <input
              id="first_name"
              type="text"
              className="validate"
              name="fname"
              required
              ref={register({
                required: true,
                minLength: 1,
                pattern: /^[a-zA-z]+$/,
              })}
            ></input>
            <span className="highlight"></span>
            <span className="bar"></span>
            <label>First Name</label>
            {errors.fname?.type === "required" && (
              <span
                className="helper-text"
                data-error="wrong"
                data-success="right"
              >
                Your input is required
              </span>
            )}
            {errors.fname?.type === "minLength" && (
              <span
                className="helper-text"
                data-error="wrong"
                data-success="right"
              >
                Your input needs to be at least 1 letter
              </span>
            )}
            {errors.fname?.type === "pattern" && (
              <span
                className="helper-text"
                data-error="wrong"
                data-success="right"
              >
                please only use letters
              </span>
            )}
          </div>
          <div id="lastName" className="group ">
            <input
              id="last_name"
              type="text"
              className="validate"
              name="lname"
              required
              ref={register({
                required: true,
                minLength: 1,
                pattern: /^[a-zA-z]+$/,
              })}
            ></input>
            <span className="highlight"></span>
            <span className="bar"></span>
            <label>Last Name</label>
            {errors.lname?.type === "required" && (
              <span
                className="helper-text"
                data-error="wrong"
                data-success="right"
              >
                Your input is required
              </span>
            )}
            {errors.lname?.type === "minLength" && (
              <span
                className="helper-text"
                data-error="wrong"
                data-success="right"
              >
                Your input needs to be at least 1 letter
              </span>
            )}
            {errors.lname?.type === "pattern" && (
              <span
                className="helper-text"
                data-error="wrong"
                data-success="right"
              >
                please only use letters
              </span>
            )}
          </div>

        <div className="email_row">
          <div id="email" className="group">
            <input
              type="email"
              className="validate"
              name="email"
              required
              ref={register({
                required: true,
                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
            ></input>
            <span className="highlight"></span>
            <span className="bar"></span>
            <label>Email</label>
            {errors.email?.type === "required" && (
              <span
                className="helper-text"
                data-error="wrong"
                data-success="right"
              >
                Your input is required
              </span>
            )}
            {errors.email?.type === "minLength" && (
              <span
                className="helper-text"
                data-error="wrong"
                data-success="right"
              >
                Your input needs to be at least 1 letter
              </span>
            )}
            {errors.email?.type === "pattern" && (
              <span
                className="helper-text"
                data-error="wrong"
                data-success="right"
              >
                Please enter a valid email address
              </span>
            )}
          </div>
        </div>

        <button className="myButton" type="submit" name="action">
          Next
        </button>
      </fieldset>
    </form>
  );
}
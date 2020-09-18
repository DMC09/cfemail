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
  const { register, handleSubmit, errors,  } = useForm();

  const onSubmit = (data, e) => {
    const { firstName, lastName,email } = data;
    setFname(firstName.replace(/\b(\w)/g, (s) => s.toUpperCase()));
    setLname(lastName.replace(/\b(\w)/g, (s) => s.toUpperCase()));
    setEmail(email);
    setComplete(true);
  fetch("http://localhost:3001/test").then(res=>res.json()).then(data=>console.log(data));
  };
  return (
    <div className="initial_form_container">
      <form onSubmit={handleSubmit(onSubmit)}>
          <div id="firstName" className="row">
            <label label="first_name">First Name</label>
            <input
              id="first_name"
              type="text"
              className="validate"
              name="firstName"
              ref={register({
                required: true,
                minLength: 1,
                pattern: /^[a-zA-z]+$/,
              })}
            ></input>
            {errors.firstName?.type === "required" && (
              <span
                className="helper-text"
                data-error="wrong"
                data-success="right"
              >
                Your input is required
              </span>
            )}
            {errors.firstName?.type === "minLength" && (
              <span
                className="helper-text"
                data-error="wrong"
                data-success="right"
              >
                Your input needs to be at least 1 letter
              </span>
            )}
            {errors.firstName?.type === "pattern" && (
              <span
                className="helper-text"
                data-error="wrong"
                data-success="right"
              >
                please only use letters
              </span>
            )}
          </div>
          <div id="lastName" className="row ">
            <label label="last_name">Last Name</label>
            <input
              id="last_name"
              type="text"
              className="validate"
              name="lastName"
              ref={register({
                required: true,
                minLength: 1,
                pattern: /^[a-zA-z]+$/,
              })}
            ></input>
            {errors.lastName?.type === "required" && (
              <span
                className="helper-text"
                data-error="wrong"
                data-success="right"
              >
                Your input is required
              </span>
            )}
            {errors.lastName?.type === "minLength" && (
              <span
                className="helper-text"
                data-error="wrong"
                data-success="right"
              >
                Your input needs to be at least 1 letter
              </span>
            )}
            {errors.lastName?.type === "pattern" && (
              <span
                className="helper-text"
                data-error="wrong"
                data-success="right"
              >
                please only use letters
              </span>
            )}
          </div>
          <div id="email" className="row">
              <label label="email">Email</label>
              <input
                id="email"
                type="email"
                className="validate"
                name="email"
                ref={register({
                  required: true,
                  pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                })}
              ></input>
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
          <button className="btn next-btn" type="submit" name="action">
          Next
        </button>
      </form>
    </div>
  );
}

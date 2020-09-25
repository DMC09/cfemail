import React, { useContext } from "react";
import axios from "axios";
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

      <form className="form_container" onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
      <h1 style={{textAlign:"center"}}>Sign up for the beta</h1>
        <div className="name_row">
        <div id="firstName" className="input-field">
          <label label="first_name">First Name</label>
          <input
            id="first_name"
            type="text"
            className="validate"
            name="fname"

            ref={register({
              required: true,
              minLength: 1,
              pattern: /^[a-zA-z]+$/,
            })}
          ></input>
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
        <div id="lastName" className="input-field ">
          <label label="last_name">Last Name</label>
          <input
            onChange={(e) =>
              setLname(
                e.target.value.replace(/\b(\w)/g, (s) => s.toUpperCase())
              )
            }
            id="last_name"
            v
            type="text"
            className="validate"
            name="lname"
            ref={register({
              required: true,
              minLength: 1,
              pattern: /^[a-zA-z]+$/,
            })}
          ></input>
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
        </div>
        <div className="email_row">
        <div id="email" className="input-field">
          <label label="email">Email</label>
          <input

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
        </div>

        <button className="btn next-btn" type="submit" name="action">
        Next
        </button>
        </fieldset>
      </form>

  );
}

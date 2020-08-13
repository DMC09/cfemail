import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FormContext } from "../context/formContext";
import "materialize-css/dist/css/materialize.min.css";

export default function InitialForm() {
  const [
    fname,
    setFname,
    lname,
    setLname,
    completedInit,
    setComplete,
  ] = useContext(FormContext);
  const { register, handleSubmit, watch, errors, getValues } = useForm();

  const onSubmit = (data, e, getValues) => {
    console.log(e);
    const { firstName, lastName } = data;
    setFname(firstName.replace(/\b(\w)/g, (s) => s.toUpperCase()));
    setLname(lastName.replace(/\b(\w)/g, (s) => s.toUpperCase()));
    setComplete(true);
  };

  const handleChange = (e) => {
    e.target.value == ""
      ? e.target.nextSibling.classList.remove("active")
      : e.target.nextSibling.classList.add("active");
  };
  return (
    <div class="row">
      <form onSubmit={handleSubmit(onSubmit)} class="col s12">
        <div class="row">
          <div class="input-field col s6">
            <input
              onChange={(e) => handleChange(e)}
              id="first_name"
              type="text"
              class="validate"
              name="firstName"
              ref={register({
                required: true,
                minLength: 1,
                pattern: /^[a-zA-z]+$/,
              })}
            ></input>
            <label for="first_name">First Name</label>
            {errors.firstName?.type === "required" && (
              <span class="helper-text" data-error="wrong" data-success="right">
                Your input is required
              </span>
            )}
            {errors.firstName?.type === "minLength" && (
              <span class="helper-text" data-error="wrong" data-success="right">
                Your input needs to be at least 1 letter
              </span>
            )}
            {errors.firstName?.type === "pattern" && (
              <span class="helper-text" data-error="wrong" data-success="right">
                please only use letters
              </span>
            )}
          </div>
          <div class="input-field col s6">
            <input
              onChange={(e) => handleChange(e)}
              id="last_name"
              type="text"
              class="validate"
              name="lastName"
              ref={register({
                required: true,
                minLength: 1,
                pattern: /^[a-zA-z]+$/,
              })}
            ></input>
            <label for="last_name">Last Name</label>
            {errors.lastName?.type === "required" && (
              <span class="helper-text" data-error="wrong" data-success="right">
                Your input is required
              </span>
            )}
            {errors.lastName?.type === "minLength" && (
              <span class="helper-text" data-error="wrong" data-success="right">
                Your input needs to be at least 1 letter
              </span>
            )}
            {errors.lastName?.type === "pattern" && (
              <span class="helper-text" data-error="wrong" data-success="right">
                please only use letters
              </span>
            )}
          </div>
        </div>

        <div class="row">
          <div class="col s12">
            <div class="input-field col s12">
              <input
                onChange={(e) => handleChange(e)}
                id="email"
                type="email"
                class="validate"
                name="email"
                ref={register({
                  required: true,
                  pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                })}
              ></input>
              <label for="email">Email</label>
              {errors.email?.type === "required" && (
                <span
                  class="helper-text"
                  data-error="wrong"
                  data-success="right"
                >
                  Your input is required
                </span>
              )}
              {errors.email?.type === "minLength" && (
                <span
                  class="helper-text"
                  data-error="wrong"
                  data-success="right"
                >
                  Your input needs to be at least 1 letter
                </span>
              )}
              {errors.email?.type === "pattern" && (
                <span
                  class="helper-text"
                  data-error="wrong"
                  data-success="right"
                >
                  Please enter a valid email address
                </span>
              )}
            </div>
          </div>
          <button
            class="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Submit
            <i class="material-icons right">send</i>
          </button>
        </div>
      </form>
    </div>
    // <div className="row">
    //   <form className="col s12" onSubmit={handleSubmit(onSubmit)}>
    //     <div className="row">
    //       <div className="input-field col s6">
    //         <input
    //           name="firstName"
    //           placeholder="First Name"
    //           ref={register({
    //             required: true,
    //             minLength: 1,
    //             pattern: /^[a-zA-z]+$/,
    //           })}
    //         />
    //         {errors.firstName?.type === "required" && (
    //         <span class="helper-text" data-error="wrong" data-success="right">Your input is required</span>
    //         )}
    //         {errors.firstName?.type === "minLength" && (
    //           <span class="helper-text" data-error="wrong" data-success="right">Your input needs to be at least 1 letter</span>
    //
    //         )}
    //         {errors.firstName?.type === "pattern" && (
    //           <span class="helper-text" data-error="wrong" data-success="right">please only use letters</span>
    //         )}
    //       </div>
    //     </div>
    //
    //     <label>Last Name</label>
    //     <input
    //       name="lastName"
    //       placeholder="Last Name"
    //       ref={register({
    //         required: true,
    //         minLength: 1,
    //         pattern: /^[a-zA-z]+$/,
    //       })}
    //     />
    //
    //     {errors.lastName?.type === "required" && (
    //       <p className="error">Your input is required</p>
    //     )}
    //     {errors.lastName?.type === "minLength" && (
    //       <p className="error">Your input needs to be at least 1 letter</p>
    //     )}
    //     {errors.lastName?.type === "pattern" && (
    //       <p className="error">please only use letters</p>
    //     )}
    //     <label>Email</label>
    //     <input
    //       name="email"
    //       ref={register({
    //         required: true,
    //         minLength: 1,
    //         pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    //       })}
    //     />
    //     {errors.email?.type === "required" && (
    //       <p className="error">Your input is required</p>
    //     )}
    //     {errors.email?.type === "minLength" && (
    //       <p className="error">Your input needs to be at least 1 letter</p>
    //     )}
    //     {errors.email?.type === "pattern" && (
    //       <p className="error">please use a valid email address</p>
    //     )}
    //     <button type="submit"> Submit</button>
    //   </form>
    // </div>
  );
}

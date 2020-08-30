import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FormContext } from "../context/formContext";

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
    <div class="container">
      <form onSubmit={handleSubmit(onSubmit)} class="">
        <div class="row">
          <div class="input-field ">
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
          <div class="input-field ">
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
        <label for="email">balls</label>

                  <input name="chexkbox" type="checkbox" value="balls" ref={register}/> hello
        <div class="row">
          <div class="input-field ">



          </div>
          <input name="hello; hello;bye" type="radio" value="one" ref={register}/> hello
          <input name="hello; hello;bye" type="radio" value=" two" ref={register}/> helloe
          <input name="hello; hello;bye" type="radio" value="three" ref={register}/> hello

        </div>

        <div class="row">
          <div class="">
            <div class="input-field ">
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
          <button class=" " type="submit" name="action">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

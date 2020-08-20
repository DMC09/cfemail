import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { FormContext } from "../context/formContext";

export default function MainForm() {
  const [fname, setFname, lname, setLname] = useContext(FormContext);
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  console.log(fname, lname);

  return (
    <>
      <div class="container z-depth-5 initial_form_container">
        <p className="center-align">
          {fname} {lname} what kind of news would you like?
        </p>
        <form onSubmit={handleSubmit(onSubmit)} class="col s12">
          <div class="row">
            <div class="input-field col m6 s12">
              <input
                id="category"
                type="checkbox"
                class="validate"
                name="category"
                ref={register({ required: true, max: 3, min: 1 })}
              ></input>
              <label for="first_name">Category</label>
              {errors.firstName?.type === "required" && (
                <span
                  class="helper-text"
                  data-error="wrong"
                  data-success="right"
                >
                  Your input is required
                </span>
              )}
              {errors.firstName?.type === "minLength" && (
                <span
                  class="helper-text"
                  data-error="wrong"
                  data-success="right"
                >
                  Your input needs to be at least 1 letter
                </span>
              )}
              {errors.firstName?.type === "pattern" && (
                <span
                  class="helper-text"
                  data-error="wrong"
                  data-success="right"
                >
                  please only use letters
                </span>
              )}
            </div>
            <div class="input-field col m6 s12">
              <input
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
              <label for="last_name">Frequency</label>
              {errors.lastName?.type === "required" && (
                <span
                  class="helper-text"
                  data-error="wrong"
                  data-success="right"
                >
                  Your input is required
                </span>
              )}
              {errors.lastName?.type === "minLength" && (
                <span
                  class="helper-text"
                  data-error="wrong"
                  data-success="right"
                >
                  Your input needs to be at least 1 letter
                </span>
              )}
              {errors.lastName?.type === "pattern" && (
                <span
                  class="helper-text"
                  data-error="wrong"
                  data-success="right"
                >
                  please only use letters
                </span>
              )}
            </div>
            <div class="input-field col m6 s12">
              <input
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
              <label for="last_name">Type</label>
              {errors.lastName?.type === "required" && (
                <span
                  class="helper-text"
                  data-error="wrong"
                  data-success="right"
                >
                  Your input is required
                </span>
              )}
              {errors.lastName?.type === "minLength" && (
                <span
                  class="helper-text"
                  data-error="wrong"
                  data-success="right"
                >
                  Your input needs to be at least 1 letter
                </span>
              )}
              {errors.lastName?.type === "pattern" && (
                <span
                  class="helper-text"
                  data-error="wrong"
                  data-success="right"
                >
                  please only use letters
                </span>
              )}
            </div>
          </div>
          <div class="row">
            <div class="col s12">
              <div class="input-field col s12">
                <input
                  id="email"
                  type="email"
                  class="validate"
                  name="email"
                  ref={register({
                    required: true,
                    pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  })}
                ></input>
                <label for="email">test</label>
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
              class="btn waves-effect waves-light col s4 offset-s4 "
              type="submit"
              name="action"
            >
              Confirm
              <i class="material-icons right">send</i>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

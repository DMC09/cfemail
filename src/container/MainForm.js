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
            <div class="input-field col  s12">
              <input
                ref={register({ required: "This is required" })}
                name="example_1"
                value={true}
                type="checkbox"
              ></input>

              <input
                type="checkbox"
                placeholder="Mobile number"
                name="Mobile number"
                ref={register({ required: true, maxLength: 12 })}
              />
              <select name="Title" ref={register({ required: true })}>
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Miss">Miss</option>
                <option value="Dr">Dr</option>
              </select>

              <input
                name="Developer"
                type="radio"
                value="Yes"
                ref={register({ required: true })}
              />
              <input
                name="Developer"
                type="radio"
                value="No"
                ref={register({ required: true })}
              />
            </div>
          </div>
        </form>
        <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="First name" name="First name" ref={register({required: true, maxLength: 80})} />
      <input type="text" placeholder="Email" name="Email" ref={register({required: true, pattern: /^\S+@\S+$/i})} />
      <input type="checkbox" placeholder="Mobile number" name="Mobile number" ref={register({required: true, maxLength: 12})} />
      <select name="Title" ref={register({ required: true })}>
        <option value="Mr">Mr</option>
        <option value="Mrs">Mrs</option>
        <option value="Miss">Miss</option>
        <option value="Dr">Dr</option>
      </select>

      <input name="Developer" type="radio" value="Yes" ref={register({ required: true })}/>
      <input name="Developer" type="radio" value="No" ref={register({ required: true })}/>

      <input type="submit" />
    </form>
      </div>
    </>
  );
}

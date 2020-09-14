import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { FormContext } from "../context/formContext";

export default function MainForm() {
  const [fname, setFname, lname, setLname,email,setEmail,] = useContext(FormContext);
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  // console.log(watch("example")); // watch input value by passing the name of it

  console.log();

  return (
    <>
      <div className="container z-depth-5 initial_form_container">
        <p className="center-align">
          {fname} {lname} what kind of news would you like?
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="col s12">
          <div className="row">
          <div className="checkbox_row">
            <input
              name="categories"
              type="checkbox"
              value="Music "
              ref={register}
            />
            <label label="email">Music</label>
            <input
              name="categories"
              type="checkbox"
              value="Movies "
              ref={register}
            />
            <label label="email">Movies</label>
            <input
              name="categories"
              type="checkbox"
              value="TV Shows"
              ref={register}
            />
            <label label="email">TV Shows</label>
          </div>
          <div className="radio_row">
            <div className="input-field ">
              <input name="Daily" type="radio" value="true" ref={register} />
              Daily
              <input name="Weekly" type="radio" value="true" ref={register} />
              Weekly
              <input name="Bi-Weekly" type="radio" value="true" ref={register}/>
              Bi-Weekly
            </div>
          </div>
          </div>
          <button className="" type="submit" name="action">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

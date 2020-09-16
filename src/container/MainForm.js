import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { FormContext } from "../context/formContext";

export default function MainForm() {
  const [fname, setFname, lname, setLname,email,setEmail,] = useContext(FormContext);
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data)

  };


console.log(fname,lname,email);
  return (
    <>
      <div className="main_form_container">
        <p className="">
          {fname} {lname} would like news about(topics) delivered every (frequency) to {email}
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="">
          <div className="row">
          <div className="checkbox_row">
          <label label="first_name">categories</label>
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
            <label label="first_name">Frequency</label>
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
            Confirm
          </button>
        </form>
      </div>
    </>
  );
}

import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { FormContext } from "../context/formContext";

export default function MainForm() {
  const [fname, setFname, lname, setLname,email,setEmail,] = useContext(FormContext);
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data)
  const {categories,frequency} = data
  };


console.log(fname,lname,email);

  return (
    <>
      <div className="main_form_container">
        <p className="">
          {fname} {lname} would like news about(topics) delivered every (frequency) to {email}
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="">

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
            <label label="Frequency">Frequency</label>

              <input type="radio" id="male" name="frequency" value="Daily" ref={register} />
<label for="Daily">Daily</label>
<input type="radio" id="female" name="frequency" value="Weekly" ref={register} />
<label for="Weekly">Weekly</label>
<input type="radio" id="other" name="frequency" value="Bi-Weekly" ref={register} />
<label for="Bi-Weekly">Bi-Weekly</label>
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

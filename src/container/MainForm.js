import React, { useContext } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { FormContext } from "../context/formContext";

export default function MainForm() {
  const [fname, setFname, lname, setLname,email,setEmail,frequency, setFrequency,category, setCategory] = useContext(FormContext);
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = async (data) => {

    // console.log(category)
const {category,frequency} = await data;
await setFrequency(frequency)
await setCategory(category)
await axios.post("http://localhost:3001/post", { fname,lname,email,frequency,category });

  };




  return (
    <>
      <div className="main_form_container">
        <p className="">
          {fname} {lname} would like news about(topics) delivered every (frequency) to {email}
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="">

          <div className="row">
          <label label="first_name">categories</label>
          <div className="cat_row">
            <input
              name="category"
              type="checkbox"
              value="Music "
              ref={register}
            />
            <label label="email">Music</label>
            <input
              name="category"
              type="checkbox"
              value="Movies "
              ref={register}
            />
            <label label="email">Movies</label>
            <input
              name="category"
              type="checkbox"
              value="TV Shows"
              ref={register}
            />
            <label label="email">TV Shows</label>
          </div>
          </div>
          <div className="row">
            <div className="input-field ">
            <label label="Frequency">Frequency</label>
            <div className="fre_row">
              <input type="radio" id="male" name="frequency" value="Daily" ref={register} />
<label for="Daily">Daily</label>
<input type="radio" id="female" name="frequency" value="Weekly" ref={register} />
<label for="Weekly">Weekly</label>
<input type="radio" id="other" name="frequency" value="Bi-Weekly" ref={register} />
<label for="Bi-Weekly">Bi-Weekly</label>
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

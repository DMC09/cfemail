import React, { useContext, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { FormContext } from "../context/formContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;

export default function MainForm() {
  const [
    fname,
    setFname,
    lname,
    setLname,
    email,
    setEmail,
    uname,
    setUname,
    pword,
    setPword,
    subscribed,
    setSubscribe,
  ] = useContext(FormContext);
  const [passwordShown, setPasswordShown] = useState(false);
  const { register, handleSubmit, errors } = useForm();
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const onSubmit = async (data) => {
    console.log(data)
    const { isSubscribing,uname,pword } = await data;
    await setUname(uname);
    await setPword(pword);
    await setSubscribe(isSubscribing);
    await axios.post("http://localhost:3001/post", {
      fname,
      lname,
      email,
      uname,
      pword,
      isSubscribing
    });
  };
  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)} className="form_container">
    <fieldset>

      <h1 style={{ textAlign: "center" }}>Almost there, {fname}!</h1>
        <div id="username" className="group">
          <input
            type="text"
            className="validate"
            name="uname"
            required
            ref={register({
              required: true,
              minLength: 1,
              pattern: /^(?=.*[a-zA-Z\d].*)[a-zA-Z\d!@#$%&*]{7,}$/,
            })}
          ></input>
          <span class="highlight"></span>
          <span class="bar"></span>
          <label >Username</label>
          {errors.uname?.type === "required" && (
            <span
              className="helper-text"
              data-error="wrong"
              data-success="right"
            >
              Your input is required
            </span>
          )}
          {errors.uname?.type === "minLength" && (
            <span
              className="helper-text"
              data-error="wrong"
              data-success="right"
            >
              Your input needs to be at least 1 letter
            </span>
          )}
          {errors.uname?.type === "pattern" && (
            <span
              className="helper-text"
              data-error="wrong"
              data-success="right"
            >
              please only use letters
            </span>
          )}
        </div>
        <div id="password" className="group">
          <input
            type={passwordShown ? "text" : "password"}
            className="validate"
            name="pword"
            required
            ref={register({
              required: true,
              minLength: 1,
              pattern: /^[a-zA-z]+$/,
            })}
          ></input>
          <span class="highlight"></span>
          <span class="bar"></span>
          <label >Password</label>
          <i style={{ color: "#E0E0E0"}} onClick={togglePasswordVisiblity}>{eye}</i>
          {errors.pword?.type === "required" && (
            <span
              className="helper-text"
              data-error="wrong"
              data-success="right"
            >
              Your input is required
            </span>
          )}
          {errors.pword?.type === "minLength" && (
            <span
              className="helper-text"
              data-error="wrong"
              data-success="right"
            >
              Your input needs to be at least 1 letter
            </span>
          )}
          {errors.pword?.type === "pattern" && (
            <span
              className="helper-text"
              data-error="wrong"
              data-success="right"
            >
              please only use letters
            </span>
          )}
        </div>
        <div className="">
          <p style={{color: "#E0E0E0",fontSize:18}}>Subscribe to Newsletter?</p>
          <div className="newsletter">
            <label style={{position: "initial",color: "#E0E0E0",fontSize:18,top:20,left:30,position:'relative'}}>Yes</label>
            <input
              type="radio"
              name="isSubscribing"
              value="true"
              ref={register}
            />
            <label style={{position: "initial",color: "#E0E0E0",fontSize:18,top:20,left:30,position:'relative'}}>No</label>
            <input
              type="radio"
              name="isSubscribing"
              value="false"
              ref={register}
            />
          </div>
        </div>
      <button className="myButton" type="submit" name="action">
        Confirm
      </button>

    </fieldset>
    </form>
  );
}
// position: relative;
// top: -30px;
// right: -290px;

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
    // console.log(data)
    const { isSubscribing,uname,pword } = await data;
    await setUname(uname);
    await setPword(pword);
    await setSubscribe(isSubscribing);
    await axios.post("https://sana-beta.herokuapp.com/post", {
      fname,
      lname,
      email,
      uname,
      pword,
      isSubscribing
    }).then(result=>console.log(result));
  };
  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)} className="form_container">
    <fieldset>
      <h1 className="form_status" style={{ textAlign: "center" }}>Almost done, {fname}!</h1>
        <div id="username" className="group">
          <input
            type="text"
            className="validate"
            name="uname"
            required
            ref={register({
              required: true,
              minLength: 1,
              pattern: /^[a-zA-Z0-9_]{1,}[a-zA-Z]+[0-9]*$/,
            })}
          ></input>
          <span className="highlight"></span>
          <span className="bar"></span>
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
              Your username must be at least 1 character
            </span>
          )}
          {errors.uname?.type === "pattern" && (
            <span
              className="helper-text"
              data-error="wrong"
              data-success="right"
            >
              please use letters and numbers
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
              pattern: /^[A-Za-z]\w{7,15}$/,
            })}
          ></input>
          <span className="highlight"></span>
          <span className="bar"></span>
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
              Your password needs to be at least 1 character
            </span>
          )}
          {errors.pword?.type === "pattern" && (
            <span
              className="helper-text"
              data-error="wrong"
              data-success="right"
            >
              please use Alphanumeric values
            </span>
          )}
        </div>
        <div className="sub_group">
          <p style={{color: "#E0E0E0",fontSize:18}}>Subscribe to Newsletter?</p>
          <div className="newsletter">
            <label style={{position: "initial",color: "#E0E0E0",fontSize:18,top:20,left:30}}>Yes</label>
            <input
              type="radio"
              name="isSubscribing"
              value="true"
              ref={register}
            />
            <label style={{position: "initial",color: "#E0E0E0",fontSize:18,top:20,left:30}}>No</label>
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

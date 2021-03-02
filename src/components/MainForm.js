import React, { useContext, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { FormContext } from "../context/formContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon style={{ marginTop: "1rem" }} icon={faEye} />;

export default function MainForm() {
  const ani =
  <div class="load-wrapp">
   <div class="load-3">
     <div class="loader-line"></div>
     <div class="loader-line"></div>
     <div class="loader-line"></div>
   </div>
 </div>
  const [
    stage,setStage,
    fname, setFname,
    lname, setLname,
    email,setEmail,
    uname, setUname,
    pword, setPword,
    subscribed,setSubscribe,
    loader,setLoder
] = useContext(FormContext);
  const [passwordShown, setPasswordShown] = useState(false);
  const { register, handleSubmit, errors } = useForm();
  const url = "https://sanabackend.herokuapp.com/post";
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const onSubmit = async (data) => {
  setLoder(ani)
  const { uname, pword, isSubscribing } = await data;
  await setUname(uname);
  await setPword(pword);
  await setSubscribe(isSubscribing);
  await axios
      .post(url, {
        fname,
        lname,
        email,
        uname,
        pword,
        isSubscribing,
      })
      .then(
        (response) => {
          console.log(response);
            setStage('success')
        },
        (error) => {
          console.log(error);
          setStage('failure')
        }
      );
  };
  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="form_container"
    >
      <fieldset>
        <h1 className="form_status" style={{ textAlign: "center" }}>
          Almost done, {fname}!
        </h1>
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
          <label>Username</label>
          {errors.uname?.type === "required" && (
            <span
              className="helper-text"
              data-error="wrong"
              data-success="right"
            >
              Username is required
            </span>
          )}
          {errors.uname?.type === "minLength" && (
            <span
              className="helper-text"
              data-error="wrong"
              data-success="right"
            >
              Username must be at least 1 character
            </span>
          )}
          {errors.uname?.type === "pattern" && (
            <span
              className="helper-text"
              data-error="wrong"
              data-success="right"
            >
              Username must consist of letters and numbers
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
          <label>Password</label>
          <i className="p_icon"  onClick={togglePasswordVisiblity}>
            {eye}
          </i>
          {errors.pword?.type === "required" && (
            <span
              className="helper-text"
              data-error="wrong"
              data-success="right"
            >
              Password is required
            </span>
          )}
          {errors.pword?.type === "minLength" && (
            <span
              className="helper-text"
              data-error="wrong"
              data-success="right"
            >
             Password must be at least 1 character
            </span>
          )}
          {errors.pword?.type === "pattern" && (
            <span
              className="helper-text"
              data-error="wrong"
              data-success="right"
            >
              Password must use letters and numbers
            </span>
          )}
        </div>
        <div className="group newsletter_group">
          <p style={{ color: "#E0E0E0", fontSize: 20,textAlign:"left",marginBottom:'1rem' }}>
            Subscribe to our monthly newsletter?
          </p>
          <div className="newsletter">
          <div className="radio_group">
          <input
          style={{
            width: "initial",
            display: "inline-block"
          }}
          type="radio"
          name="isSubscribing"
          value="true"
          required
          ref={register}
          />
            <label
              style={{
                position: "initial",
                display: "inline-block",
                color: "#E0E0E0",
                fontSize: 18,
                top: 20,
                left: 30,
              }}
            >
              Sure!
            </label>
            </div>
            <div className="radio_group">
            <input
            style={{
              width: "initial",
              display: "inline-block"
            }}
            type="radio"
            name="isSubscribing"
            value="false"
            required
            ref={register}
            />
            <label
              style={{
                position: "initial",
                color: "#E0E0E0",
                display: "inline-block",
                fontSize: 18,
                top: 20,
                left: 30,
              }}
            >
              No thanks!
            </label>
            </div>
          </div>
        </div>

        <button className="myButton" type="submit" name="action">
            {loader}
        </button>
      </fieldset>
    </form>
  );
}

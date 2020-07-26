import React, {useContext} from "react";
import { useForm } from "react-hook-form";
import {FormContext} from '../context/formContext';


export default function MainForm() {
  const [fname, setFname,lname,setLname] = useContext(FormContext);
  const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example")); // watch input value by passing the name of it




  return (
    <div className="mainform_container" >
  {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
   <form onSubmit={handleSubmit(onSubmit)}>
   {/* register your input into the hook by invoking the "register" function */}
   <input
     name="email"
     ref={register({
       required: true,
       pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
     })}
   />
   {errors.email?.type === "required" && (
     <p className="error">Your isnput is required</p>
   )}
   {errors.email?.type === "pattern" && (
     <p className="error">Please enter a valid email address</p>
   )}

     <input type="submit" />
   </form>

    </div>
  );
}

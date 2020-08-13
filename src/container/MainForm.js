import React, {useContext} from "react";
import { useForm } from "react-hook-form";
import {FormContext} from '../context/formContext';


export default function MainForm() {
  const [fname, setFname,lname,setLname] = useContext(FormContext);
  const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example")); // watch input value by passing the name of it


console.log(fname, lname)

  return (
<h1>hello world!</h1>
  );
}

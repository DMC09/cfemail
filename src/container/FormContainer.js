
import React, { useContext } from "react";
import {FormContext} from '../context/formContext';
import NameContainer from './NameContainer';

const FromContainer = () => {
  const [fname, setFname,lname,setLname] = useContext(FormContext);


  return (
    <div className="form-container" >
      <NameContainer />
    </div>
  )
}

export default FromContainer

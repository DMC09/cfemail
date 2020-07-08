
import React, { useContext } from "react";
import {FormContext} from '../context/formContext';
import NameContainer from './NameContainer';

const FromContainer = () => {
  const [fname, setFname] = useContext(FormContext);
  console.log(fname)

  return (
    <div className="form-container" >
      <NameContainer />
    </div>
  )
}

export default FromContainer

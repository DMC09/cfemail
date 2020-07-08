import React, { useContext, useEffect,useState } from "react";
import { FormContext } from "../context/formContext";
import FirstName from "../comp/FirstName";
import LastName from "../comp/LastName";
import StartButton from '../service/StartButton'

const NameContainer = () => {
  const [fname, setFname, lname, setLname] = useContext(FormContext);
  console.log(fname);
  const regex = /^[a-zA-z]+$/;
  const handleFirst = (e) => regex.test(e.target.value) && setFname(e.target.value.trim());
  const handleLast = (e) => regex.test(e.target.value) && setLname(e.target.value.trim());
  console.log(fname);

  useEffect(() => {
    // regex.test(fname.trim()) && regex.test(lname.trim())
  }, [fname, lname]);

  return (
    <div className="name-container">
      <h1>Welcome</h1>
      <h1>{fname} {lname}</h1>
      <FirstName value={fname} onChange={handleFirst} />
      <LastName value={fname} onChange={handleLast} />
      <StartButton />
    </div>
  );
};

export default NameContainer;

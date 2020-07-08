import React, { useContext } from "react";
import { FormContext } from "../context/formContext";
import FirstName from "../comp/FirstName";
import LastName from "../comp/FirstName";

const NameContainer = () => {
  const [fname, setFname, lname, setLname] = useContext(FormContext);
  console.log([fname, lname]);

  const handleFirst = (e) => setFname(e.target.value.trim());
  const handleLast = (e) => setLname(e.target.value.trim());

  return (
    <div className="name-container">
      <FirstName onChange={handleFirst} />
      <p>{fname}</p>
      <LastName onChange={handleLast} />
      <p>{lname}</p>
    </div>
  );
};

export default NameContainer;

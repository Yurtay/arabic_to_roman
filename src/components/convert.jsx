import React, { useState } from "react";

const Convert = ({ fnConvert }) => {
  const [data, setData] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = ({ target }) => {
    setData(target.value);
    console.log(data);
  };

  return (
    <div className="convert_container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Enter number</label>
        <input type="text" onChange={handleChange} name="arabica" />
        <button onClick={() => fnConvert(data)}>Convert</button>
        <span>Result: </span>
      </form>
    </div>
  );
};

export default Convert;

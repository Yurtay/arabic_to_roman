import React from "react";

const Convert = ({ fnConvert, result, name }) => {
  const handleChange = ({ target }) => {
    fnConvert(target.value);
  };

  return (
    <>
      <div className="convert_container">
        <h2 id="convert_container_title">{`<->`}</h2>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Enter number on arabic or roman...."
            id="convert_input"
            type="text"
            onChange={handleChange}
          />
          <span id="span_result">{result}</span>
        </form>
      </div>
    </>
  );
};

export default Convert;

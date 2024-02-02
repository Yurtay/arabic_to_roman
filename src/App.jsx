import { useState } from "react";
import "./App.css";
import convertToRoman from "./utils/convertToRoman";
import convertToArabic from "./utils/convertToArabic";
import checkForRoman from "./utils/checkToRoman";
import imgRoman from "./img/roman.png";
import imgArabic from "./img/arabic.jpg";

function App() {
  const [resultConvert, setResultConvert] = useState("results...");
  const [error, setError] = useState(false);
  const [stateNumb, setStateNumb] = useState("<->");

  const convert = (numb) => {
    setError(false);
    switch (true) {
      case numb === "":
        setError(false);
        setResultConvert("results...");
        setStateNumb("<->");
        break;
      case Number(numb) === 0 || resultConvert === "0":
        setStateNumb("<->");
        setError(true);
        setResultConvert("results...");
        break;
      case !isNaN(numb):
        setStateNumb("arabic");
        setResultConvert(convertToRoman(numb));
        break;
      case checkForRoman(numb):
        setStateNumb("roman");
        setResultConvert(convertToArabic(numb));
        break;
      default:
        setError(true);
        setResultConvert("results...");
        break;
    }
  };

  const handleChange = ({ target }) => {
    convert(target.value);
  };
  return (
    <>
      {/* <div id="main_container">

      </div> */}
      <div id="body_container" className="content">
        <h1 id="main_text">Convert number on Arabic or Roman</h1>
        <div>
          <div className="content">
            <img
              id="img"
              src={
                stateNumb === "arabic" || stateNumb === "<->"
                  ? imgArabic
                  : imgRoman
              }
              alt="hello!"
            />
          </div>
          <div className="content" id="convert_container">
            <h2 id="convert_container_title">
              {stateNumb === "arabic"
                ? "Arabic <-> Roman"
                : stateNumb === "roman"
                ? "Roman <-> Arabic"
                : "<->"}
            </h2>
            <form>
              <input
                placeholder="Enter number on arabic or roman...."
                id="convert_input"
                type="text"
                onChange={handleChange}
                autoComplete="off"
              />
              <h3 id="span_result">{resultConvert}</h3>
            </form>
          </div>
          <div className="content">
            <img
              id="img"
              src={
                stateNumb === "arabic" || stateNumb === "<->"
                  ? imgRoman
                  : imgArabic
              }
              alt="hello!"
            />
          </div>
        </div>

        {error && <div id="error_container">Enter the correct value</div>}
      </div>
    </>
  );
}

export default App;

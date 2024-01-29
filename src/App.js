import "./App.css";
import Convert from "./components/convert";

function App() {
  const converToArabica = (numb) => {
    console.log("CONVERT: ", numb);
  };
  return (
    <>
      <div id="main_container">
        <h1 id="main_text">Arabic to Roman</h1>
      </div>
      <Convert fnConvert={converToArabica} />
      <Convert fnConvert={converToArabica} />
    </>
  );
}

export default App;

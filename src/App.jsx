import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";
function App() {
  const [userInput, setUserInput] = useState({
    InitialInvestment: 10000,
    AnnualInvestment: 1200,
    ExpectedReturn: 6,
    Duration: 10,
  });
  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevValue) => {
      return { ...prevValue, [inputIdentifier]: Number(newValue) };
    });
  }
  const validDuration = userInput.Duration > 0;
  return (
    <>
      <Header></Header>
      <UserInput userInput={userInput} handleChange={handleChange}></UserInput>
      {validDuration ? (
        <Results input={userInput}></Results>
      ) : (
        <p className="center">Please enter a duration grater than zero</p>
      )}
    </>
  );
}

export default App;

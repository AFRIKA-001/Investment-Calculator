import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from './components/Results'

  

function App() {
   const [userInput, setUserInput] = useState({
    initialInvestment:15000,
    annualInvestment: 4000,
    expectedReturn: 10,
    duration:12,
  });
  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <div>   
   <Header />
  <UserInput  userInput={userInput}   onChangeInput={handleChange} />

 {inputIsValid ?  <Results  input={userInput} /> : <p className="center">please enter a duration greater than zero!</p>}



    </div>

  )
}

export default App

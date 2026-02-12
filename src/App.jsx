import Header from "../components/Header";
import UserInput from "../components/UserInput";
import calculateInvestmentResults from "./util/investment";
import  {formatter}  from "./util/investment";  






function App() {
  return (
    <div>   
   <Header />
   <UserInput />
   <calculateInvestmentResults />
   <formatter />
    </div>

  )
}

export default App

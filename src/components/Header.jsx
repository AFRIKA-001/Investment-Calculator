import investmentImg from "../src/assets/investment-calculator-logo.png";
import UserInput from "./UserInput";



export default function Header(){
    return(
        <header id="header">
            <img src={investmentImg} alt="investment calculator image" />
            <h1>Investment Calculator</h1>
            <UserInput/>
        </header>
    )
}
import logo from "../assets/investment-calculator-logo.png";
export default function Header() {
  return (
    <header id="header">
      <img src={logo} alt="logo showing money bag" />
      <h1>Investment Caluculator</h1>
    </header>
  );
}

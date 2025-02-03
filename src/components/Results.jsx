import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function Results({ input }) {
  const resData = calculateInvestmentResults(
    input.InitialInvestment,
    input.AnnualInvestment,
    input.ExpectedReturn,
    input.Duration
  );
  console.log(resData);
  const InitialInvestment = input.InitialInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Investment Capital</th>
        </tr>
      </thead>
      <tbody>
        {resData.map((results) => {
          const totalInterest =
            results.valueEndOfYear -
            results.annualInvestment * results.year -
            InitialInvestment;
          const totalInvested = results.valueEndOfYear - totalInterest;
          return (
            <tr key={results.year}>
              <td>{results.year}</td>
              <td>{formatter.format(results.valueEndOfYear)}</td>
              <td>{formatter.format(results.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

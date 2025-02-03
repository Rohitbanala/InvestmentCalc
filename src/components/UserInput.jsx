export default function UserInput({ userInput, handleChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            value={userInput.InitialInvestment}
            required
            onChange={(event) =>
              handleChange("InitialInvestment", event.target.value)
            }
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            value={userInput.AnnualInvestment}
            required
            onChange={(event) =>
              handleChange("AnnualInvestment", event.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            value={userInput.ExpectedReturn}
            required
            onChange={(event) =>
              handleChange("ExpectedReturn", event.target.value)
            }
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            value={userInput.Duration}
            required
            onChange={(event) => handleChange("Duration", event.target.value)}
          />
        </p>
      </div>
    </section>
  );
}

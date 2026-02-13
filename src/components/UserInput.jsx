
export default function UserInput({onChangeInput , userInput}) {
 
  return (
    <section id="user-input">
      <div className="input-group">
        <label>Initial Investment</label>
        <input
          type="number"
          required
          value={userInput.initialInvestment}
          onChange={(event) =>
           onChangeInput("initialInvestment", event.target.value)
          }
        />

        <label>Annual Investment</label>
        <input
          type="number"
          required
          value={userInput.annualInvestment}
          onChange={(event) =>
           onChangeInput("annualInvestment", event.target.value)
          }
        />
      </div>
      <div className="input-group">
        <label>Expected Return</label>
        <input
          type="number"
          required
          onChange={(event) =>
           onChangeInput("expectedReturn", event.target.value)
          }
          value={userInput.expectedReturn}
        />

        <label>Duration</label>
        <input
          type="number"
          required
          onChange={(event) =>
           onChangeInput("duration", event.target.value)
          }
          value={userInput.duration}
        />
      </div>
    </section>
  );
}

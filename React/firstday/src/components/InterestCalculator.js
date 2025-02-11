import { useState } from "react";

export default function InterestCalculator() {
  const [principal, setPrincipal] = useState(-1);
  const [rateOfInterest, setRate] = useState(-1);
  const [timeInYears, setTime] = useState(-1);
  const [simpleInterest, setTotal] = useState(null);

  const handlePrincipal = (e) => setPrincipal(Number(e.target.value));
  const handleRate = (e) => setRate(Number(e.target.value));
  const handleTime = (e) => setTime(Number(e.target.value));

  const calculateInterest = () => {
    if (principal > 0 && rateOfInterest > 0 && timeInYears > 0) {
      const simpleInterest = (principal * rateOfInterest * timeInYears) / 100;
      setTotal(simpleInterest);
    } else {
      setTotal("Please enter valid positive numbers.");
    }
  };

  return (
    <>
      <form>
        <label>
          Principal (P):
          <input
            type="number"
            value={principal === -1 ? "" : principal}
            onChange={handlePrincipal}
            placeholder="Enter principal"
          />
        </label>
        <br />
        <label>
          Rate of Interest (R):
          <input
            type="number"
            value={rateOfInterest === -1 ? "" : rateOfInterest}
            onChange={handleRate}
            placeholder="Enter rate"
          />
        </label>
        <br />
        <label>
          Time in Years (T):
          <input
            type="number"
            value={timeInYears === -1? "" : timeInYears}            
            onChange={handleTime}
            placeholder="Enter time"
          />
        </label>
        <br />
        <button type="button" onClick={calculateInterest}>
          Calculate Simple Interest
        </button>
      </form>
      <br />
      {simpleInterest !== null && (
        <p>
          <strong>Simple Interest:</strong>{" "}
          {typeof simpleInterest === "number"
            ? `₹${simpleInterest.toFixed(2)}`
            : simpleInterest}
        </p>
      )}
    </>
  );
}

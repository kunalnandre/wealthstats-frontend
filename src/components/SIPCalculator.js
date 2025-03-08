import React, { useState } from "react";

const SIPCalculator = () => {
  const [investment, setInvestment] = useState("");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState("");
  const [result, setResult] = useState(null);

  const calculateSIP = () => {
    const monthlyRate = rate / 100 / 12;
    const months = years * 12;
    const futureValue =
      investment *
      ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
      (1 + monthlyRate);

    setResult(futureValue.toFixed(2));
  };

  return (
    <div style={{ textAlign: "center", maxWidth: "400px", margin: "auto", padding: "20px", border: "1px solid #ddd", borderRadius: "10px" }}>
      <h2>SIP Calculator</h2>
      <div style={{ marginBottom: "10px" }}>
        <label>Monthly Investment (₹): </label>
        <input type="number" value={investment} onChange={(e) => setInvestment(e.target.value)} />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label>Expected Return Rate (%): </label>
        <input type="number" value={rate} onChange={(e) => setRate(e.target.value)} />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label>Investment Period (years): </label>
        <input type="number" value={years} onChange={(e) => setYears(e.target.value)} />
      </div>
      <button onClick={calculateSIP} style={{ padding: "10px", cursor: "pointer" }}>Calculate</button>

      {result && (
        <h3>Future Value: ₹{result}</h3>
      )}
    </div>
  );
};

export default SIPCalculator;

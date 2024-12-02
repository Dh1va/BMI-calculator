import React, { useState } from "react";
import "./Bmi.css";

const Bmi = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [bmiStatus, setBmiStatus] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const calculateBmi = () => {
    const isValidHeight = /^\d+$/.test(height);
    const isValidWeight = /^\d+$/.test(weight);
    if (isValidHeight && isValidWeight) {
      if (height && weight) {
        const heightInMeters = height / 100;
        const bmiValue = weight / (heightInMeters * heightInMeters);
        setBmi(bmiValue.toFixed(2));
        if (bmiValue < 18.5) {
          setBmiStatus("Under weight");
        } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
          setBmiStatus("Normal weight");
        } else if (bmiValue >= 25 && bmiValue <= 29.9) {
          setBmiStatus("Over weight");
        } else {
          setBmiStatus("Obese");
        }
        setErrorMessage("");
      } else {
        setBmi(null);
        setBmiStatus(null);
        setErrorMessage(
          "Please enter valid numeric values for height and weight."
        );
      }
      setErrorMessage("");
    } else {
      setBmi(null);
      setBmiStatus(null);
      setErrorMessage(
        "Please enter valid numeric values for height and weight."
      );
    }
  };

  const clearAll = () => {
    setBmi(null);
    setBmiStatus("");
    setHeight("");
    setWeight("");
  };

  return (
    <div className="bmi-container">
      <div className="inner-container">
        <div className="box">
          
        </div>
        <div className="data">
          <h1>BMI Calculator</h1>
          {errorMessage && <p className="error">{errorMessage}</p>}
          <div className="input-container">
            <label htmlFor="height">Height (cm):</label>
            <input
              type="text"
              name=""
              id="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div className="input-container">
            <label htmlFor="weight">Weight (kg):</label>
            <input
              type="text"
              name=""
              id="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <button onClick={calculateBmi}>Calculate BMI</button>
          <button onClick={clearAll}>Clear</button>
          {bmi !== null && (
            <div className="result">
              <p>Your BMI is : {bmi}</p>
              <p>Status : {bmiStatus}</p>
            </div>
          )}
        </div>
       
      </div>
      <p className='footer'>Designed by <a href="https://github.com/Dh1va">Dh1va</a></p>
    </div>
  );
};

export default Bmi;

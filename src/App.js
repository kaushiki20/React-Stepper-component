import React, { useState } from "react";
import "./styles.css";
import Stepper from "./Stepper";
export default function App() {
  const [stepperDetails, setStepperDetails] = useState([
    {
      count: 1,
      title: "form",
      active: false
    },
    {
      count: 2,
      title: "details",
      active: false
    },
    {
      count: 3,
      title: "payment",
      active: false
    },
    {
      count: 4,
      title: "confirm",
      active: false
    },
    {
      count: 5,
      title: "order",
      active: false
    }
  ]);

  return (
    <div className="App">
      <Stepper
        stepperDetails={stepperDetails}
        setStepperDetails={setStepperDetails}
      />
    </div>
  );
}

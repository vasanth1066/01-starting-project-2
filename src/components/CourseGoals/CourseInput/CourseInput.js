import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";
import "../../UI/Button/Button.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");

  const [Isvalid, setIsvalid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsvalid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.length === 0) {
      setIsvalid(false);
      return;
    }
    props.onAddGoal(enteredValue);
    //
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!Isvalid ? "invalid" : ""}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button className={`button ${!Isvalid ? "invalid" : ""}`} type="submit">
        Add Goal
      </Button>
    </form>
  );
};

export default CourseInput;

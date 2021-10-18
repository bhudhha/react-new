import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
const AddUser = (props) => {
  const [name_val, setName_Val] = useState("");
  const [age_val, setAge_Val] = useState("");
  const handlerName = (e) => {
    setName_Val(e.target.value);
  };
  const handlerAge = (e) => {
    setAge_Val(e.target.value);
  };
  const AddUserHandler = (event) => {
    event.preventDefault();
    if (name_val.trim().length === 0 || age_val.trim().length === 0) {
      setAge_Val("");
      setName_Val("");
      return;
    }
    if (age_val < 1 || age_val > 200) {
      setAge_Val("");
      setName_Val("");
      return;
    }
    console.log(name_val, age_val);
    setAge_Val("");
    setName_Val("");
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={AddUserHandler}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          onChange={handlerName}
          value={name_val}
          name={name_val}
        ></input>
        <label htmlFor="age">Age</label>
        <input
          type="number"
          id="age"
          onChange={handlerAge}
          value={age_val}
          name={age_val}
        ></input>
        <Button type="submit">ADD</Button>
      </form>
    </Card>
  );
};
export default AddUser;

import React, { useState } from "react";
const AddUser = (props) => {
  const [name_setter, handler_set_name] = useState("");
  const [age_setter, handler_set_age] = useState("");
  const handler_to_name = (e) => {
    handler_set_name(e.target.value);
  };
  const handler_to_age = (e) => {
    handler_set_age(e.target.value);
  };
  const AddUserHandler = (event) => {
    event.preventDefault();
    if (name_setter.trim().length === 0 || age_setter.trim().length === 0) {
      alert('fill the crediential')
      return;
    }
    if (age_setter < 1) {
      alert("age must be above 1");
      return;
    }
    console.log(name_setter, age_setter);
    handler_set_name("");
    handler_set_age("");
  };
  return (
    <form onSubmit={AddUserHandler}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        onChange={handler_to_name}
        name={name_setter}
        value={name_setter}
      ></input>
      <label htmlFor="age">Age</label>
      <input
        type="number"
        id="age"
        onChange={handler_to_age}
        name={age_setter}
        value={age_setter}
      ></input>
      <button type="submit">ADD</button>
    </form>
  );
};
export default AddUser;

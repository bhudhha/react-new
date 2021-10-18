import React from "react";
const AddUser = (props) => {
const AddUserHandler=(event)=>{
    event.preventDefault();
}
  return (
    <form onSubmit={AddUserHandler}>
      <label htmlFor="name">Name</label>
      <input type="text" id="name"></input>
      <label htmlFor="age">Age</label>
      <input type="number" id="age"></input>
      <button type="submit">ADD</button>
    </form>
  );
};
export default AddUser;
import React, { useState } from "react";

function Form(props) {
  const { addMember } = props;
  const [formData, setFormData] = useState({
    firstName: "",
    secondName: "",
    race: "",
  });
  const changeHandler = (e) => {
    const { name, value } = e.target;
    console.log(e);
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };
  const submitHandler = (e) => {
    addMember(formData);
    e.preventDefault();
    setFormData({
      firstName: "",
      secondName: "",
      race: "",
    });
  };
  return (
    <form onSubmit={submitHandler}>
      <label>
        <span>Name: </span>
        <input
          name="firstName"
          type="text"
          value={formData.firstName}
          onChange={changeHandler}
        />
      </label>
      <br />
      <br />
      <label>
        <span>Second Name: </span>
        <input
          name="secondName"
          type="text"
          value={formData.secondName}
          onChange={changeHandler}
        />
      </label>
      <br />
      <br />

      <label htmlFor="race">Race: </label>
      <select id="race" name="race" onChange={changeHandler}>
        <option value="default">Choose</option>
        <option value="Hobbit">Hobbit</option>
        <option value="Elf">Elf</option>
        <option value="Man">Man</option>
        <option value="Dwarf">Dwarf</option>
        <option value="Wizard">Wizard</option>
      </select>
      <br />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;

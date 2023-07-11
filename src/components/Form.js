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
      <label>
        <span>Race: </span>
        <input
          name="race"
          type="text"
          value={formData.race}
          onChange={changeHandler}
        />
      </label>
      <label for="cars">Choose a car:</label>
      <select id="cars" name="cars" onChange={changeHandler}>
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="fiat">Fiat</option>
        <option value="audi">Audi</option>
      </select>
      <br />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;

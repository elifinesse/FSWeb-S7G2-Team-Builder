import "./App.css";
import React, { useState } from "react";
import Form from "./components/Form";

function App() {
  const [memberList, setMemberList] = useState([
    { firstName: "Frodo", secondName: "Baggings", race: "Hobbit" },
  ]);

  const addMember = (member) => {
    setMemberList([...memberList, member]);
  };

  return (
    <div className="App">
      <h1>Let's "Form" the Fellowship of the Ring!</h1>
      {memberList.map((mbr) => (
        <div className="team-member>">
          <p>Name: {mbr.firstName}</p>
          <p>Second Name: {mbr.secondName}</p>
          <p>Race: {mbr.race}</p>
        </div>
      ))}
      <Form addMember={addMember} />
    </div>
  );
}

export default App;

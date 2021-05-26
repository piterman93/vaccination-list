import React, { useState } from "react";

import "./AddPanel.css";

const AddPanel = () => {
  const currentTime = new Date().getTime();
  const date = new Date(currentTime).toLocaleDateString();

  const [name, setName] = useState("");
  const [vaccined, setVaccined] = useState(false);
  const [firstDate, setFirstDate] = useState("");

  return (
    <div className="panel">
      <h1>Aplikacja: lista szczepień w dniu {date}</h1>
      <input
        type="text"
        placeholder="Imię i nazwisko"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="user">
        {" "}
        <input
          type="checkbox"
          id="user"
          checked={vaccined}
          onChange={(e) => setVaccined(e.target.checked)}
        />
        Pierwsza dawka
      </label>
      <br />
      <label>
        Data pierwszego szczepienia{" "}
        <input
          type="date"
          value={firstDate}
          onChange={(e) => setFirstDate(e.target.value)}
        />
      </label>
      <br />
      <button>Zapisz pacjenta</button>
    </div>
  );
};

export default AddPanel;

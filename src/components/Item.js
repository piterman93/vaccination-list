import React from "react";

import "./Item.css";

const Item = ({ name, vaccined, date, active }) => {
  const styles = {
    color: "red",
    fontWeight: "bold",
  };

  const userAfterFirstDose = (
    <em>
      <strong>{name}</strong> - <span style={styles}> first dose: {date}</span>
    </em>
  );

  const userBeforeFirstDose = (
    <em>
      <strong>{name}</strong> - N/A
    </em>
  );

  const user = vaccined ? userAfterFirstDose : userBeforeFirstDose;

  const activeUserLi = (
    <li>
      {user} <button className="confirm"> Zaszczepiony </button>{" "}
      <button> X </button>{" "}
    </li>
  );
  if (active) {
    return activeUserLi;
  } else {
    const currentDate = new Date().getTime();
    const vaccinationDate = new Date(currentDate).toLocaleString();

    const vaccinedUser = (
      <li>
        {user}
        <button> X </button> <br />
        <p>(zaszczepiony/na - {vaccinationDate})</p>
      </li>
    );

    return vaccinedUser;
  }
};

export default Item;

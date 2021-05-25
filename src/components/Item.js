import React from "react";

import "./Item.css";

const Item = ({
  name,
  vaccined,
  date,
  active,
  clickRemoval,
  clickChangeActive,
  id,
  vaccinDate,
}) => {
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
      {user}
      <button className="confirm" onClick={() => clickChangeActive(id)}>
        {" "}
        Zaszczepiony{" "}
      </button>{" "}
      <button onClick={() => clickRemoval(id)}> X </button>{" "}
    </li>
  );
  if (active) {
    return activeUserLi;
  } else {
    const vaccinationDate = new Date(vaccinDate).toLocaleString();

    const vaccinedUser = (
      <li>
        {user}
        <button onClick={() => clickRemoval(id)}> X </button> <br />
        <p>(zaszczepiony/na - {vaccinationDate})</p>
      </li>
    );

    return vaccinedUser;
  }
};

export default Item;

import React, { useContext } from "react";

import "./Item.css";

const Item = ({ name, id, vaccined, date }) => {
  const styles = {
    color: "red",
    fontWeight: "bold",
  };

  const userVaccined = (
    <em>
      {id} : {name} - <span style={styles}> first dose: {date}</span>
    </em>
  );

  const userNotVaccined = (
    <em>
      {id} : {name} - N/A
    </em>
  );

  const user = vaccined ? userVaccined : userNotVaccined;

  return (
    <li>
      {user}
      <button className="confirm"> Zaszczepiony </button>
      <button> X </button>
    </li>
  );
};

export default Item;

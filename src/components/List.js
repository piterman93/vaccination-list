import React, { useContext } from "react";
import { AppContext } from "./AppContext";

import Item from "./Item";

const List = () => {
  const users = useContext(AppContext);

  const List = users.map((user) => (
    <Item
      key={user.id}
      name={user.name}
      vaccined={user.afterFirstDose}
      id={user.id}
      date={user.firstDoseDate}
    />
  ));

  return (
    <div className="list">
      <h2>Lista osób w kolejce:</h2>
      <ul>{List}</ul>
    </div>
  );
};

export default List;

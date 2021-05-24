import React, { useContext } from "react";
import { AppContext } from "./AppContext";

import Item from "./Item";

const List = () => {
  const users = useContext(AppContext);

  const activeUsers = users.filter((user) => user.active);
  const notActiveUsers = users.filter((user) => !user.active);

  const listBefore = activeUsers.map((user) => (
    <Item
      key={user.id}
      name={user.name}
      vaccined={user.afterFirstDose}
      id={user.id}
      date={user.firstDoseDate}
      active={user.active}
    />
  ));

  const listAfter = notActiveUsers.map((user) => (
    <Item
      key={user.id}
      name={user.name}
      vaccined={user.afterFirstDose}
      id={user.id}
      date={user.firstDoseDate}
      active={user.active}
    />
  ));

  return (
    <div className="list">
      <h2>Lista osób w kolejce:</h2>
      <ul>{listBefore}</ul>
      <hr />
      <h3>Lista zaszczepionych dziś:</h3>
      <ul>{listAfter}</ul>
    </div>
  );
};

export default List;

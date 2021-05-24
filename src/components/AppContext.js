import React, { createContext, useState } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [users, setUsers] = useState([
    {
      id: 0,
      name: "Jan Kowalski",
      afterFirstDose: false,
      firstDoseDate: "",
      active: true,
    },
    {
      id: 1,
      name: "Agnieszka Nowak",
      afterFirstDose: true,
      firstDoseDate: "2021-04-25",
      active: false,
    },
    {
      id: 2,
      name: "Marcin Brach",
      afterFirstDose: true,
      firstDoseDate: "2021-03-25",
      active: true,
    },
  ]);

  return <AppContext.Provider value={users}>{children}</AppContext.Provider>;
};

export default AppProvider;

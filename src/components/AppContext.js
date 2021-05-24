import React, { createContext, useState } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Jan Kowalski",
      afterFirstDose: true,
      firstDoseDate: "2021-04-25",
    },
    {
      id: 2,
      name: "Agnieszka Nowak",
      afterFirstDose: false,
      firstDoseDate: "",
    },
    {
      id: 3,
      name: "Marcin Brach",
      afterFirstDose: true,
      firstDoseDate: "2021-03-25",
    },
  ]);

  return <AppContext.Provider value={users}>{children}</AppContext.Provider>;
};

export default AppProvider;

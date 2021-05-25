import React, { createContext, useState } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Jan Kowalski",
      afterFirstDose: false,
      firstDoseDate: "",
      active: true,
      vaccinDate: null,
    },
    {
      id: 2,
      name: "Agnieszka Nowak",
      afterFirstDose: true,
      firstDoseDate: "2021-04-25",
      active: true,
      vaccinDate: null,
    },
    {
      id: 3,
      name: "Marcin Brach",
      afterFirstDose: true,
      firstDoseDate: "2021-03-25",
      active: true,
      vaccinDate: null,
    },
  ]);

  const handleActiveChange = (id) => {
    const array = [...users];
    array.forEach((element) => {
      if (element.id === id) {
        element.active = false;
        element.vaccinDate = new Date().getTime();
      }
    });
    setUsers(array);
  };

  const handleRemoval = (id) => {
    const array = [...users];
    const index = array.findIndex((element) => element.id === id);
    array.splice(index, 1);
    setUsers(array);
  };

  return (
    <AppContext.Provider value={{ users, handleActiveChange, handleRemoval }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

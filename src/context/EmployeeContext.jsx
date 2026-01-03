import { createContext, useContext, useEffect, useState } from "react";

const EmployeeContext = createContext();

const initialEmployees = [
  {
    id: 1,
    name: "Employee 1",
    gender: "Male",
    dob: "1995-06-10",
    state: "Telangana",
    active: true,
    image: null
  }
];

export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState(initialEmployees);


  return (
    <EmployeeContext.Provider
      value={{ employees, setEmployees }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};

export const useEmployees = () => {
  return useContext(EmployeeContext);
}

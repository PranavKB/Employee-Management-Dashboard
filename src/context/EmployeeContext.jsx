import { createContext, useContext, useEffect, useState } from "react";

const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
  fetch("https://randomuser.me/api/?results=20")
    .then(res => res.json())
    .then(data => {
      const employees = data.results.map(u => ({
        id: u.login.uuid,
        employeeId: `${u.name.first[0]}${u.name.last[0]}${Math.floor(1000 + Math.random() * 9000)}`,
        profileImage: u.picture.large,
        fullName: `${u.name.first} ${u.name.last}`,
        gender: u.gender,
        dob: u.dob.date,
        state: u.location.state,
        isActive: Math.random() < 0.5
      }));
      setEmployees(employees);
    });
}, []);


  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  const addEmployee = (employee) => {
    setEmployees((prev) => [...prev, employee]);
  };

  const updateEmployee = (updatedEmployee) => {
    setEmployees((prev) =>
      prev.map((emp) =>
        emp.id === updatedEmployee.id ? updatedEmployee : emp
      )
    );
  };

  const deleteEmployee = (id) => {
    setEmployees((prev) => prev.filter((emp) => emp.id !== id));
  };

  return (
    <EmployeeContext.Provider
      value={{ employees, addEmployee, updateEmployee, deleteEmployee }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};

export const useEmployees = () => {
  return useContext(EmployeeContext);
}

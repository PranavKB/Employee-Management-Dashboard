import { useEffect, useState } from "react";
import { EmployeeContext } from "./EmployeeContext";

export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState(() => {
    const saved = localStorage.getItem("employees");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=20&nat=in")
      .then((res) => res.json())
      .then((data) => {
        const mapped = data.results.map((u) => ({
          id: u.login.uuid,
          employeeId: `${u.name.first[0]}${u.name.last[0]}${Math.floor(
            1000 + Math.random() * 9000
          )}`,
          profileImage: u.picture.large,
          fullName: `${u.name.first} ${u.name.last}`,
          gender: u.gender,
          dob: u.dob.date,
          state: u.location.state,
          isActive: Math.random() < 0.6,
        }));

        setEmployees(mapped);
      })
      .catch((error) => {
        console.error('Error fetching messages:', error);
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
      value={{
        employees,
        addEmployee,
        updateEmployee,
        deleteEmployee,
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};

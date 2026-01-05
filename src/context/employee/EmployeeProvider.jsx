import { useEffect, useState } from "react";
import { EmployeeContext } from "./EmployeeContext";
import dayjs from "dayjs";
import { App } from "antd";

export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState(() => {
    const saved = localStorage.getItem("employees");
    return saved ? JSON.parse(saved) : [];
  });
  const { message } = App.useApp();

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=30&nat=in")
      .then((res) => res.json())
      .then((data) => {
        const mapped = data.results.map((u) => ({
          id: u.login.uuid,
          employeeId: `${u.name.first[0]}${u.name.last[0]}${Math.floor(1000 + Math.random() * 9000)}`,
          profileImage: u.picture.large,
          fullName: `${u.name.first} ${u.name.last}`,
          gender: u.gender,
          dob: dayjs(u.dob.date),
          state: u.location.state,
          isActive: Math.random() < 0.6,
        }));

        setEmployees(mapped);
      })
      .catch((error) => {
        message.error('Failed to fetch employees data');
        console.error('Error fetching employees:', error);
      });
  }, []);

  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  const addEmployee = (employee) => {
    setEmployees((prev) => [...prev, employee]);
    message.success('Employee added successfully');
  };

  const updateEmployee = (updatedEmployee) => {
    setEmployees((prev) =>
      prev.map((emp) =>
        emp.id === updatedEmployee.id ? updatedEmployee : emp
      )
    );
    message.success('Employee updated successfully');
  };

  const deleteEmployee = (id) => {
    setEmployees((prev) => prev.filter((emp) => emp.id !== id));
    message.success('Employee deleted successfully');
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

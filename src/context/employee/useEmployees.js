import { useContext } from "react";
import { EmployeeContext } from "./EmployeeContext";

export const useEmployees = () => {
  const ctx = useContext(EmployeeContext);

  return ctx;
};

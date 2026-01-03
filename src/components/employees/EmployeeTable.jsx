import { Table } from "antd";
import { useEmployees } from "../../context/EmployeeContext";

const EmployeeTable = () => {
    const { employees } = useEmployees();

    const columns = [
    { title: "Employee ID", dataIndex: "employeeId" },
    { title: "Name", dataIndex: "fullName" },
    { title: "Gender", dataIndex: "gender" },
    { title: "DOB", dataIndex: "dob" },
    { title: "State", dataIndex: "state" },
    {
      title: "Active", dataIndex: "isActive", 
      render: (isActive) => (isActive ? "Yes" : "No")
    },
    {
      title: "Actions",
    }
  ];

  return (
    <Table rowKey="id" columns={columns} dataSource={employees} />
  )
}

export default EmployeeTable;

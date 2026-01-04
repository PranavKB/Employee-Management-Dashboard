import { Card, Table } from "antd";
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
    <Card variant="borderless" title="Employee List" style={{ marginTop: 16 }} styles={{ body: { padding: 0, height: 'calc(100vh - 260px)' } }}>
        <Table rowKey="id" columns={columns}
          bordered size="small"
          scroll={{ x: 1500, y: 'calc(100vh - 380px)' }}
          pagination={{
                    showTotal: (total, range) =>
                        `${range[0]}-${range[1]} of ${total}`,
                }}
          dataSource={employees} />
    </Card>
  )
}

export default EmployeeTable;

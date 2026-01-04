import { Button, Card, Input, Space, Table } from "antd";
import { useState } from "react";
import { useEmployees } from "../../context/employee/useEmployees";
import { columns } from "./tableColumns";
import EmployeeForm from "./EmployeeForm";
import DeleteButton from "../DeleteButton";

const EmployeeTable = () => {
  const { employees, updateEmployee, deleteEmployee, addEmployee } = useEmployees();
  const [filters, setFilters] = useState({ name: '' });
  const [openEmpModal, setOpenEmpModal] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const tableColumns = [
        ...columns,
        {
          title: "Actions",
          render: (_, record) => (
            <Space>
              <Button
                onClick={() => {
                  setSelectedEmployee(record);
                  setOpenEmpModal(true);
                }}
              >
                Edit
              </Button>
              <DeleteButton onDelete={() => deleteEmployee(record.id)}/>
            </Space>
          ),
        }
    ];

  const handleNameSearch = (value) =>
        setFilters((prev) => ({ ...prev, name: value }));

  const fetchFilteredData = (data, filters) => {
        let filteredData = [...data];

        if (filters.name) {
            filteredData = filteredData.filter((item) =>
                item.fullName?.toLowerCase().includes(filters.name.toLowerCase())
            );
        }
        
        return filteredData;
    };

  const extraActions = () => {
    return (
      <div style={{ display: "flex", gap: 8 }}>
          <Input
            placeholder="Search Name"
            allowClear
            onChange={(e) => handleNameSearch(e.target.value)}
        />
        <Button type="primary" style={{ marginLeft: 8 }}
          onClick={() => {
            setSelectedEmployee(null);
            setOpenEmpModal(true);
          }}
        >
            Add Employee
        </Button>        
      </div> 
      )
  };

  const onSubmitForm = (values) => {
      if (selectedEmployee) {
        updateEmployee({
          ...selectedEmployee,
          ...values,
        });
      } else {
        addEmployee({
          ...values,
          id: crypto.randomUUID(),
          employeeId: `EMP${Math.floor(1000 + Math.random() * 9000)}`,
          profileImage: null,
        });
      }
  }

  return (
    <>
      <Card variant="borderless" title="Employee List" style={{ marginTop: 16 }} styles={{ body: { padding: 0, height: 'calc(100vh - 260px)' } }}
        extra={extraActions()}
      >
          <Table rowKey="id" columns={tableColumns}
            bordered size="small"
            scroll={{ x: 1500, y: 'calc(100vh - 350px)' }}
            pagination={{
                      showTotal: (total, range) =>
                          `${range[0]}-${range[1]} of ${total}`,
                  }}
            dataSource={fetchFilteredData(employees, filters)} />
      </Card>
      <EmployeeForm
            open={openEmpModal}
            initialValues={selectedEmployee}
            onCancel={() => setOpenEmpModal(false)}
            onSubmit={(values) => {
              onSubmitForm(values);
              setSelectedEmployee(null);
              setOpenEmpModal(false);
            }}
          />
    </>
  )
}

export default EmployeeTable;

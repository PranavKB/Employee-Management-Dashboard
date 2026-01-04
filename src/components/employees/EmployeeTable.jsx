import { Button, Card, Input, Space, Switch, Table } from "antd";
import { useMemo, useState } from "react";
import { useEmployees } from "../../context/employee/useEmployees";
import { columns } from "./tableColumns";
import EmployeeForm from "./EmployeeForm";
import DeleteButton from "../DeleteButton";
import { EditOutlined } from "@ant-design/icons";

const EmployeeTable = () => {
  const { employees, updateEmployee, deleteEmployee, addEmployee } = useEmployees();
  const [tableFilters, setTableFilters] = useState({ name: '' });
  const [openEmpModal, setOpenEmpModal] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const tableColumns = [
    ...columns,
    {
      title: "Active",
      dataIndex: "isActive",
      render: (isActive, record) => (
        <Switch
          size="medium"
          checked={isActive}
          checkedChildren="Yes"
          unCheckedChildren="No"
          onChange={(checked) =>
            updateEmployee({ ...record, isActive: checked })
          }
        />
      ),
      filters: [
        { text: "Active", value: true },
        { text: "Inactive", value: false },
      ],
      onFilter: (value, record) => record.isActive === value,
    },
    {
      title: "Actions",
      render: (_, record) => (
        <Space>
          <Button
            icon={<EditOutlined />}
            size="small"
            onClick={() => {
              setSelectedEmployee(record);
              setOpenEmpModal(true);
            }}
          >
            Edit
          </Button>
          <DeleteButton onDelete={() => deleteEmployee(record.id)} />
        </Space>
      ),
    },
  ];

  const handleNameSearch = (value) =>
        setTableFilters((prev) => ({ ...prev, name: value }));

  const filteredEmployees = useMemo(() => {
    return employees.filter((emp) =>
      emp.fullName?.toLowerCase().includes(tableFilters.name.toLowerCase())
    );
  }, [employees, tableFilters.name]);

  const extraActions = () => {
    return (
      <div style={{ display: "flex", gap: 8 }}>
          <Input
            placeholder="Search Name"
            allowClear
            onChange={(e) => handleNameSearch(e.target.value)}
        />
        <Button type="primary" style={{ marginLeft: 8 }}
          disabled={openEmpModal}
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
            locale={{ emptyText: "No employees found" }}
            bordered size="small"
            scroll={{ x: 1500, y: 'calc(100vh - 350px)' }}
            pagination={{
                      showTotal: (total, range) =>
                          `${range[0]}-${range[1]} of ${total}`,
                  }}
            dataSource={filteredEmployees} />
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

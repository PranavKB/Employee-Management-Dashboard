import { Button, Card, Input, Table } from "antd";
import { useEmployees } from "../../context/EmployeeContext";
import { useState } from "react";

const EmployeeTable = () => {
    const { employees } = useEmployees();
    const [filters, setFilters] = useState({ name: '' });

    const columns = [
    { title: "Employee ID", dataIndex: "employeeId" },
    { title: "Name", dataIndex: "fullName",
      sorter: (a, b) => a.fullName.localeCompare(b.fullName)
     },
    { title: "Gender", dataIndex: "gender", 
      filters: [
          { text: "Male", value: "male" },
          { text: "Female", value: "female" },
      ], 
      onFilter: (value, record) => record.gender === value,
  },
    { title: "DOB", dataIndex: "dob", 
      render: (dob) => new Date(dob).toLocaleDateString("en-GB"),
      sorter: (a, b) => new Date(a.dob) - new Date(b.dob)
    },
    { title: "State", dataIndex: "state",
      sorter: (a, b) => a.state.localeCompare(b.state)
     },
    {
      title: "Active", dataIndex: "isActive", 
      render: (isActive) => (isActive ? "Yes" : "No"),
      filters: [
          { text: "Active", value: true },
          { text: "Inactive", value: false },
      ],
      onFilter: (value, record) => record.isActive === value,
    },
    {
      title: "Actions",
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
      <div style={{
                    display: 'flex',
                }}
        >
          <Input
            placeholder="Search Name"
            allowClear
            onChange={(e) => handleNameSearch(e.target.value)}
        />
        <Button type="primary" style={{ marginLeft: 8 }}>
            Add Employee
        </Button>
      </div> 
      )
  };

  return (
    <Card variant="borderless" title="Employee List" style={{ marginTop: 16 }} styles={{ body: { padding: 0, height: 'calc(100vh - 260px)' } }}
      extra={extraActions()}
    >
        <Table rowKey="id" columns={columns}
          bordered size="small"
          scroll={{ x: 1500, y: 'calc(100vh - 380px)' }}
          pagination={{
                    showTotal: (total, range) =>
                        `${range[0]}-${range[1]} of ${total}`,
                }}
          dataSource={fetchFilteredData(employees, filters)} />
    </Card>
  )
}

export default EmployeeTable;

import { Button, Card, Input, Table } from "antd";
import { useState } from "react";
import { useEmployees } from "../../context/employee/useEmployees";
import { columns } from "./tableColumns";
import EmployeeForm from "./EmployeeForm";

const EmployeeTable = () => {
  const { employees } = useEmployees();
  const [filters, setFilters] = useState({ name: '' });
  const [openEmpModal, setOpenEmpModal] = useState(false);
    

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
        <Button type="primary" style={{ marginLeft: 8 }}
          onClick={() => setOpenEmpModal(true)}
        >
            Add Employee
        </Button>
        <EmployeeForm
          open={openEmpModal}
          onCancel={() => setOpenEmpModal(false)}
          onSubmit={() => {
            setOpenEmpModal(false);
          }}
        />

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

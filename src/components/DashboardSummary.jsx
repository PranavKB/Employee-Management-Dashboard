import { Card, Col, Row, Statistic } from "antd";
import { useEmployees } from "../context/EmployeeContext";

const DashboardSummary = () => {
  const { employees } = useEmployees();
  const activeCount = employees.filter(e => e.isActive).length;

  return (
    <>
      <Row gutter={16}>
        <Col span={8}>
          <Card size="small">
            <Statistic title="Total Employees" value={employees.length} />
          </Card>
        </Col>
        <Col span={8}>
          <Card size="small">
            <Statistic title="Active Employees" value={activeCount} />
          </Card>
        </Col>
        <Col span={8}>
          <Card size="small">
            <Statistic title="Inactive Employees" value={employees.length - activeCount} />
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default DashboardSummary;

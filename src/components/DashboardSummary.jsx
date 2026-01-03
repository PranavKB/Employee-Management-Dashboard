import { Card, Col, Row, Statistic } from "antd";

const DashboardSummary = () => {
  return (
    <>
      <Row gutter={16}>
        <Col span={8}>
          <Card>
            <Statistic title="Total Employees" value={100} />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic title="Active Employees" value={85} />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic title="Inactive Employees" value={15} />
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default DashboardSummary;

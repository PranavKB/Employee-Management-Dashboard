import { Layout, Typography, Button, App } from "antd";
import DashboardSummary from "../../components/DashboardSummary";
import EmployeeTable from "../../components/employees/EmployeeTable";
import AppHeader from "../../components/AppHeader";

const { Content } = Layout;

export const Dashboard = () => {
  

  return (
    <Layout >
      <AppHeader />
      <Content style={{ padding: 16 }}>
        <DashboardSummary />
        <EmployeeTable />
      </Content>
    </Layout>
  );
}
export default Dashboard;


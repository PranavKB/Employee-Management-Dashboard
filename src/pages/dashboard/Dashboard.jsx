import { Layout, Typography, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import DashboardSummary from "../../components/DashboardSummary";
import EmployeeTable from "../../components/employees/EmployeeTable";

const { Header, Content } = Layout;
const { Title } = Typography;

export const Dashboard = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <Layout >
      <Header>
        <Title level={4}>
          Employee Dashboard
        </Title>
        <Button onClick={handleLogout}>Logout</Button>
      </Header>

      <Content style={{ padding: 24 }}>
        <DashboardSummary />
        <EmployeeTable />
      </Content>
    </Layout>
  );
}
export default Dashboard;


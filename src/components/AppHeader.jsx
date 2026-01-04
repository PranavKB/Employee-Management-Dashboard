import { useNavigate } from "react-router-dom";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Dropdown, Layout, Typography } from "antd";
import { useAuth } from "../context/auth/useAuth";
const { Header } = Layout;
const { Title } = Typography;

const AppHeader = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const logoutMenu = {
        items: [
            {
                key: 'logout',
                icon: <LogoutOutlined />,
                label: 'Logout',
                onClick: handleLogout,
            },
        ],
    };

  

  return (
    <Header 
        style={{
            background: '#fff',
            boxShadow: '0 1px 4px rgba(0,0,0,0.1)',
            padding: '0 32px',
            zIndex: 1000,
        }}
    >
        <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    height: 'inherit',
                }}
            >
            <Title level={4}>
                Employee Dashboard
            </Title>
            <Dropdown menu={logoutMenu} placement="bottomRight" arrow>
                <Avatar
                    size="large"
                    icon={<UserOutlined />}
                    style={{ cursor: 'pointer' }}
                />
            </Dropdown>
        </div>
        
    </Header>
  )
}

export default AppHeader;

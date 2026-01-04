import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Card, Form, Input, Button, Typography } from "antd";
import './Login.css';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth/useAuth";

const { Title } = Typography;

export const Login = () => {

  const { login } = useAuth();
  const navigate = useNavigate();

  const onLogin = () => {
    login();
    navigate("/dashboard");
  };

  return (
    <div className="login-container">
      <Card className="login-card">
        <Title level={3} className="login-title">
          Dashboard Login
        </Title>

        <Form layout="vertical" className="login-form" name="login" onFinish={onLogin}>
          <Form.Item
            label={<span className="login-label">Username</span>}
            name="username"
            rules={[{ required: true, message: "Please enter username" }]}
          >
            <Input
                  prefix={<UserOutlined />}
                  placeholder="Enter username"
                  className="login-input"
              />
          </Form.Item>

          <Form.Item
            label={<span className="login-label">Password</span>}
            name="password"
            rules={[{ required: true, message: "Please enter password" }]}
          >
            <Input.Password
                  prefix={<LockOutlined />}
                  placeholder="Enter password"
                  className="login-input-password"
              />
          </Form.Item>

          <Button type="primary" htmlType="submit" block className="login-button">
            Login
          </Button>
        </Form>
      </Card>
    </div>
  );
}
export default Login;

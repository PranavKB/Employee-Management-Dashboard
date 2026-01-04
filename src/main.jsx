import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'antd/dist/reset.css';
import { AuthProvider } from './context/auth/AuthProvider';
import { EmployeeProvider } from './context/employee/EmployeeProvider';
import { ConfigProvider, App as AntdApp } from 'antd';
import enUS from 'antd/es/locale/en_US';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConfigProvider locale={enUS}>
      <AntdApp>
        <AuthProvider>
          <EmployeeProvider>
            <App />
          </EmployeeProvider>
        </AuthProvider>
      </AntdApp>
    </ConfigProvider>
  </React.StrictMode>
)

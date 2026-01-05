# Employee Management Dashboard

Employee Management Dashboard is a front-end application that provides an interface to view, create, update, and manage employee information. It is structured as a single-page application (SPA) served by Vite. It provides a secure (mock-authenticated) interface to manage employee records with features such as listing, searching, filtering, editing, deleting, and printing employee data.

## **Implemented Features**

### **Authentication (Mock)**
- **Simple login screen**
- **Authentication state stored in local storage**
- **Users cannot access the dashboard without logging in**
- **Redirects to dashboard after successful login**

### **Dashboard Summary**
- **Displays total number of employees**
- **Data updates dynamically when employees are added or removed**

### **Employee Table**
Implemented using Ant Design Table with the following columns:
- **Employee ID**
- **Profile Image (avatar)**
- **Full Name**
- **Gender**
- **Date of Birth**
- **State**
- **Active / Inactive status (toggle)**
- **Actions:**
- - **Edit**
- - **Delete (with confirmation)**



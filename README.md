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
  - **Edit**
  - **Delete (with confirmation)**

### **Add / Edit Employee**
**Single reusable modal form for Add & Edit**
**Fields implemented:**
- **Profile Image Upload**
- **Full Name**
- **Gender**
- **Date of Birth**
- **State (dropdown)**
- **Active / Inactive toggle**
**Features:**
- **Image preview before saving**
- **Form validations**
- **Edit mode pre-fills existing data**

### **Search & Filters**
Search employees by name
**Filter by:**
- **Gender**
- **Active / Inactive status**
Search and filters work together

### **Print Functionality**
- **Print employee list using browser print**
- **Prints only relevant table content**
- **Prints same list when filter or sort is applied**





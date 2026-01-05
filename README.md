# Employee Management Dashboard

Employee Management Dashboard is a front-end application that provides an interface to view, create, update, and manage employee information. It is structured as a single-page application (SPA) served by Vite. It provides a secure (mock-authenticated) interface to manage employee records with features such as listing, searching, filtering, editing, deleting, and printing employee data.

---

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
- Search and filters work together

### **Print Functionality**
- **Print employee list using browser print**
- **Prints only relevant table content**
- **Prints same list when filter or sort is applied**

---

## Tech stack & dependencies

- **React.js (JavaScript)**
- **Ant Design (antd)**
- **React Hooks**
- **React Router**
- **Local State / Context**
- **Browser Print API**

### Runtime
- Vite — fast dev server 
- Node.js / npm — package manager and runtime for dev/build

### Primary libraries (from package.json `dependencies`)
- @ant-design/icons: ^6.1.0
- antd: ^6.1.3
- dayjs: ^1.11.19
- react: ^19.2.0
- react-dom: ^19.2.0
- react-router-dom: ^7.11.0

---

## Prerequisites
- Node.js (recommend LTS v18 or later)
- npm (comes with Node.js)
- Git (optional, for cloning)

---

## Steps to run the project locally

1. Clone the repository
   - git clone https://github.com/PranavKB/Employee-Management-Dashboard.git
   - cd Employee-Management-Dashboard

2. Install dependencies
   - npm install

3. Start the development server
   - npm run dev
   - Open the URL printed by Vite (commonly http://localhost:5173)

4. Lint the code
   - npm run lint
  
---

## Project structure (high level)

- index.html
- package.json
- vite.config.js
- eslint.config.js
- public/            
- src/               — source code (components, pages)

---

## Assumptions & design decisions

1. Framework and UI
   - React (v19) is used for the UI and SPA structure.
   - Ant Design (antd) chosen to provide a consistent, production-ready design system and component set to accelerate UI development.

2. Date handling
   - Day.js is used instead of heavier libraries (e.g., Moment) for compact and performant date parsing/formatting.
  
3. State management
   - No global state manager is used; component-level state (React hooks) and context are expected to be sufficient. If the application grows, Redux/RTK or another state solution can be used.

---
## Screenshots
- Dashboard image for reference

<img width="913" height="410" alt="Screenshot 2026-01-05 104147" src="https://github.com/user-attachments/assets/a1cc2e86-99f1-4943-bc16-c61eb829a3dd" />

- Add employee form image showing validations

<img width="912" height="409" alt="Screenshot 2026-01-05 104119" src="https://github.com/user-attachments/assets/6fd6b5c8-6689-4644-9046-fefc10cfe174" />

- Edit employee form image showing pre-filled details

<img width="1917" height="911" alt="Screenshot 2026-01-05 104531" src="https://github.com/user-attachments/assets/781b8e43-a9cb-448e-bae0-44ab317fed2b" />


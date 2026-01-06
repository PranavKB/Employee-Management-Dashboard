# Employee Management Dashboard

Employee Management Dashboard is a front-end single-page application (SPA) built using **React.js and Vite**.  
It provides a **mock-authenticated** interface to view, create, update, and manage employee information with features such as listing, searching, filtering, editing, deleting, and printing employee data.

---

## Table of Contents

1. [Project Overview](#employee-management-dashboard)
2. [Implemented Features](#implemented-features)
   - [Authentication (Mock)](#authentication-mock)
   - [Dashboard Summary](#dashboard-summary)
   - [Employee Table](#employee-table)
   - [Add / Edit Employee](#add--edit-employee)
   - [Search & Filters](#search--filters)
   - [Print Functionality](#print-functionality)
3. [Tech Stack & Dependencies](#tech-stack--dependencies)
4. [Prerequisites](#prerequisites)
5. [Steps to Run the Project Locally](#steps-to-run-the-project-locally)
6. [Project Structure](#project-structure-high-level)
7. [Assumptions & Design Decisions](#assumptions--design-decisions)
8. [Mock Data Source](#mock-data-source)
9. [Screenshots](#screenshots)

---

## Implemented Features

### Authentication (Mock)
- Simple login screen
- Authentication state stored in local storage
- Users cannot access the dashboard without logging in
- Redirects to dashboard after successful login

---

### Dashboard Summary
- Displays total number of employees
- Data updates dynamically when employees are added or removed

---

### Employee Table
Implemented using **Ant Design Table** with the following columns:
- Employee ID
- Profile Image (avatar)
- Full Name
- Gender
- Date of Birth
- State
- Active / Inactive status (toggle)
- Actions:
  - Edit
  - Delete (with confirmation)

---

### Add / Edit Employee
- Single reusable modal form for Add & Edit

**Fields implemented:**
- Profile Image upload
- Full Name
- Gender
- Date of Birth
- State (dropdown)
- Active / Inactive toggle

**Features:**
- Image preview before saving
- Form validations
- Edit mode pre-fills existing data

---

### Search & Filters
- Search employees by name
- Filter by:
  - Gender
  - Active / Inactive status
- Search and filters work together

---

### Print Functionality
- Print employee list using browser print
- Prints only relevant table content
- Prints the same list when filters or sorting are applied

---

## Tech Stack & Dependencies

### Core
- React.js (JavaScript)
- Ant Design (antd)
- React Hooks
- React Router
- Browser Print API

### Runtime & Tooling
- Vite — fast development server and build tool
- Node.js / npm — runtime and package manager

### Primary Libraries (`dependencies`)
- `@ant-design/icons`: ^6.1.0
- `antd`: ^6.1.3
- `dayjs`: ^1.11.19
- `react`: ^19.2.0
- `react-dom`: ^19.2.0
- `react-router-dom`: ^7.11.0

---

## Prerequisites
- Node.js (recommended LTS v18 or later)
- npm (comes with Node.js)
- Git (optional, for cloning)

---

## Steps to Run the Project Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/PranavKB/Employee-Management-Dashboard.git
   cd Employee-Management-Dashboard

2. Install dependencies
   ```
   - npm install
   ```
4. Start the development server
   ```
   - npm run dev
   ```
   - Open the URL printed by Vite (commonly http://localhost:5173)

6. Lint the code
   ```
   - npm run lint
   ```  
---

## Project structure

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
### Mock Data Source

Employee data is generated using the public API:
https://randomuser.me/api/?results=30&nat=in

- Used only for development and demonstration purposes
- Generates realistic Indian user profiles (name, gender, DOB, profile image)
  
---
## Screenshots
- Simple login page

<img width="913" height="409" alt="Screenshot 2026-01-05 143730" src="https://github.com/user-attachments/assets/95ec441c-d64e-4266-a8ae-2ee21c57f8c1" />
  
- Dashboard image for reference

<img width="913" height="410" alt="Screenshot 2026-01-05 104147" src="https://github.com/user-attachments/assets/a1cc2e86-99f1-4943-bc16-c61eb829a3dd" />

- Add employee form image showing validations

<img width="912" height="409" alt="Screenshot 2026-01-05 104119" src="https://github.com/user-attachments/assets/6fd6b5c8-6689-4644-9046-fefc10cfe174" />

- Edit employee form image showing pre-filled details

<img width="917" height="411" alt="Screenshot 2026-01-05 104531" src="https://github.com/user-attachments/assets/781b8e43-a9cb-448e-bae0-44ab317fed2b" />

- Delete confirmation pop up

<img width="918" height="410" alt="Screenshot 2026-01-05 104207" src="https://github.com/user-attachments/assets/86dc25f2-0bbc-4f0e-a8be-c7ccd1aafad2" />


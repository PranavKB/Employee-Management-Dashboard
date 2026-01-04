import dayjs from "dayjs";

export const columns = [
    { title: "Employee ID", dataIndex: "employeeId" },
    { title: "Name", dataIndex: "fullName",
      sorter: (a, b) => a.fullName.localeCompare(b.fullName)
     },
    { title: "Gender", dataIndex: "gender", 
      filters: [
          { text: "Male", value: "male" },
          { text: "Female", value: "female" },
      ], 
      onFilter: (value, record) => record.gender === value,
    },
    { title: "DOB", dataIndex: "dob", 
        render: (dob) => dob ? dayjs(dob).format("DD/MM/YYYY") : "-",
        sorter: (a, b) => dayjs(a.dob).valueOf() - dayjs(b.dob).valueOf(),
    },
    { title: "State", dataIndex: "state",
        sorter: (a, b) => a.state.localeCompare(b.state)
     },
  ];


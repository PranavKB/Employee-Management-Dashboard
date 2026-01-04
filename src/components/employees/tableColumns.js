import dayjs from "dayjs";
import React from "react";
import ProfileAvatar from "../ProfileAvatar";

export const columns = [
  {
    title: "Employee ID",
    dataIndex: "employeeId",
    width: 150,
  },
  {
    title: "Profile Image",
    dataIndex: "profileImage",
    width: 120,
    align: "center",
    render: (profileImage, record) =>
      React.createElement(ProfileAvatar, {
        src: profileImage,
        name: record?.fullName || "Employee",
      }),
  },
  {
    title: "Name",
    dataIndex: "fullName",
    sorter: (a, b) =>
      (a.fullName || "").localeCompare(b.fullName || ""),
  },
  {
    title: "Gender",
    dataIndex: "gender",
    filters: [
      { text: "Male", value: "male" },
      { text: "Female", value: "female" },
    ],
    onFilter: (value, record) => record.gender === value,
    render: (gender) =>
      gender ? gender.charAt(0).toUpperCase() + gender.slice(1) : "-",
  },
  {
    title: "Date of Birth",
    dataIndex: "dob",
    render: (dob) => (dob ? dayjs(dob).format("DD/MM/YYYY") : "-"),
    sorter: (a, b) =>
      dayjs(a.dob || 0).valueOf() - dayjs(b.dob || 0).valueOf(),
  },
  {
    title: "State",
    dataIndex: "state",
    sorter: (a, b) =>
      (a.state || "").localeCompare(b.state || ""),
    render: (state) => state || "-",
  },
];

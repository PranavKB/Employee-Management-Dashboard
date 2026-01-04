
const handlePrint = (employees) => {
  const printWindow = window.open("", "_blank");
  if (!printWindow) return;

  const doc = printWindow.document;

  doc.title = "Employee List";

  const style = doc.createElement("style");
  style.textContent = `body {
                          font-family: Arial, sans-serif;
                          padding: 16px;
                        }

                        h2 {
                          text-align: center;
                          margin-bottom: 16px;
                        }

                        table {
                          width: 100%;
                          border-collapse: collapse;
                          font-size: 12px;
                        }

                        th, td {
                          border: 1px solid #000;
                          padding: 6px;
                          text-align: left;
                        }

                        th {
                          background: #f5f5f5;
                        }

                        thead {
                          display: table-header-group;
                        }

                        tr {
                          page-break-inside: avoid;
                        }

                        @page {
                          size: A4;
                          margin: 16mm;
                        }
                      `;
  doc.head.appendChild(style);

  const rows = employees
    .map((emp, indx) => `<tr>
                        <td>${indx + 1}</td>
                        <td>${emp.employeeId}</td>
                        <td>${emp.fullName}</td>
                        <td>${capitalize(emp.gender)}</td>
                        <td>${formatDate(emp.dob)}</td>
                        <td>${emp.isActive ? "Yes" : "No"}</td>
                      </tr>
                    `
        )
        .join("");

  doc.body.innerHTML = `<h2>Employee List</h2>
                        <table>
                          <thead>
                            <tr>
                              <th></th>
                              <th>Employee ID</th>
                              <th>Name</th>
                              <th>Gender</th>
                              <th>Date of Birth</th>
                              <th>Active</th>
                            </tr>
                          </thead>
                          <tbody>
                            ${rows}
                          </tbody>
                        </table>
                      `;

  printWindow.onload = () => {
    printWindow.focus();
    printWindow.print();
  };
};

const formatDate = (dob) => {
  if (!dob) return "-";
  const date = new Date(dob);
  return date.toLocaleDateString("en-GB");
};

const capitalize = (val) => val ? val.charAt(0).toUpperCase() + val.slice(1) : "-";

export default handlePrint;

import { Popconfirm, Button } from "antd";

const DeleteButton = ({ onDelete }) => (
  <Popconfirm
    title="Delete Employee"
    description="Are you sure you want to delete this record?"
    okText="Yes"
    cancelText="No"
    onConfirm={onDelete}
    placement="left"
  >
    <Button danger>Delete</Button>
  </Popconfirm>
);

export default DeleteButton;

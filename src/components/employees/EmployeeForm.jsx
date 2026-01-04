import { Form, Input, Modal, Select, DatePicker, Switch } from "antd";

const { Option } = Select;

const EmployeeForm = ({ open, onCancel, onSubmit }) => {
  const [form] = Form.useForm();

  const handleFinish = (values) => {
    onSubmit(values);
    form.resetFields();
  };

  return (
    <Modal
      title="Add Employee"
      open={open}
      onCancel={onCancel}
      onOk={() => form.submit()}
      okText="Save"
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={handleFinish}
        initialValues={{ isActive: true }}
      >
        <Form.Item
          name="fullName"
          label="Full Name"
          rules={[{ required: true, message: "Please enter name" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="gender"
          label="Gender"
          rules={[{ required: true }]}
        >
          <Select>
            <Option value="female">Female</Option>
            <Option value="male">Male</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="dob"
          label="Date of Birth"
          rules={[{ required: true }]}
        >
          <DatePicker style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          name="state"
          label="State"
          rules={[{ required: true }]}
        >
          <Select>
            <Option value="Andhra">Andhra Pradesh</Option>
            <Option value="Karnataka">Karnataka</Option>
            <Option value="Maharashtra">Maharashtra</Option>
            <Option value="Telangana">Telangana</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="isActive"
          label="Active"
          valuePropName="checked"
        >
          <Switch />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EmployeeForm;

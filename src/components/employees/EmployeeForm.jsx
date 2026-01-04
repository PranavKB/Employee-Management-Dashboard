import { Form, Input, Modal, Select, DatePicker, Switch } from "antd";
import { useEffect } from "react";
import dayjs from "dayjs";

const { Option } = Select;

const EmployeeForm = ({ open, onCancel, onSubmit, initialValues }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (open) {
      if (initialValues) {
        // Edit mode
        form.setFieldsValue({
          ...initialValues,
          dob: initialValues.dob ? dayjs(initialValues.dob) : null,
        });
      } else {
        // Add mode
        form.resetFields();
      }
    }
  }, [open, initialValues, form]);

  const handleFinish = (values) => {    
    onSubmit({
      ...values,
      dob: values.dob?.toISOString(),
    });
    form.resetFields();
  };

  return (
    <Modal
      title={initialValues ? "Edit Employee" : "Add Employee"}
      open={open}
      onCancel={() => {
        form.resetFields();
        onCancel();
      }}
      onOk={() => form.submit()}
      okText="Save"
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={handleFinish}
      >
        <Form.Item name="id" hidden>
          <Input />
        </Form.Item>
        <Form.Item name="employeeId" hidden>
          <Input />
        </Form.Item>
        <Form.Item name="profileImage" hidden>
          <Input />
        </Form.Item>

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

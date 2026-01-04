import { Form, Input, Modal, Select, DatePicker, Switch } from "antd";
import { useEffect } from "react";
import dayjs from "dayjs";
import PhotoUpload from "../PhotoUpload";

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
        validateTrigger="onBlur"
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
          name="profileImage"
          label="Profile Image"
          valuePropName="value"
          getValueFromEvent={(val) => val}
          >
          <PhotoUpload />
        </Form.Item>

        <Form.Item
          name="fullName"
          label="Full Name"
          rules={[
              { required: true, message: "Please enter full name" },
              { min: 3, message: "Name must be at least 3 characters" },
              {
                pattern: /^[A-Za-z]+(?: [A-Za-z]+)*$/,
                message: "Only alphabets and single spaces allowed",
              },
              {
                validator: (_, value) =>
                  value && value.trim() !== value
                    ? Promise.reject("No leading or trailing spaces")
                    : Promise.resolve(),
              },
            ]}
          >
          <Input placeholder="e.g. Rahul Sharma" />
        </Form.Item>


        <Form.Item
          name="gender"
          label="Gender"
          rules={[
            { required: true, message: "Please select gender" },
          ]}
        >
          <Select placeholder="Select gender">
            <Option value="female">Female</Option>
            <Option value="male">Male</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="dob"
          label="Date of Birth"
          rules={[
            { required: true, message: "Please select date of birth" },
            {
              validator: (_, value) => {
                if (!value) return Promise.resolve();

                if (value.isAfter(dayjs())) {
                  return Promise.reject("Date of birth cannot be in the future");
                }

                const age = dayjs().diff(value, "year");
                if (age < 18) {
                  return Promise.reject("Employee must be at least 18 years old");
                }

                return Promise.resolve();
              },
            },
          ]}
        >
          <DatePicker
            style={{ width: "100%" }}
            disabledDate={(current) => current && current > dayjs().endOf("day")}
          />
        </Form.Item>

        <Form.Item
          name="state"
          label="State"
          rules={[{ required: true, message: "Please select state" }]}
        >
          <Select placeholder="Select state">
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
          initialValue={true}
        >
          <Switch />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EmployeeForm;

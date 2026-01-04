import { Upload, Avatar } from "antd";
import { PlusOutlined, UserOutlined } from "@ant-design/icons";

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
  });

const PhotoUpload = ({ value, onChange }) => {
  const handleBeforeUpload = async (file) => {
    const base64 = await getBase64(file);
    // push value to parent/form
    onChange(base64);
    // prevent auto upload
    return false;
  };

  return (
    <Upload
      showUploadList={false}
      beforeUpload={handleBeforeUpload}
      accept="image/*"
    >
      <Avatar
        size={80}
        src={value}
        icon={<UserOutlined />}
        style={{ cursor: "pointer" }}
      />
      <div style={{ marginTop: 8, color: "#1890ff" }}>
        <PlusOutlined /> Upload
      </div>
    </Upload>
  );
};

export default PhotoUpload;

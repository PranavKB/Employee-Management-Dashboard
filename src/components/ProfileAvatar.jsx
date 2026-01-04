import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";

const ProfileAvatar = ({ src, name }) => {
  const [loadedSrc, setLoadedSrc] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!src) return;

    const img = new Image();
    img.src = src;

    img.onload = () => setLoadedSrc(src);
    img.onerror = () => setError(true);

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src]);

  return (
    <Avatar
      size={40}
      src={!error ? loadedSrc : null}
      icon={<UserOutlined />}
      alt={name}
    />
  );
};

export default ProfileAvatar;

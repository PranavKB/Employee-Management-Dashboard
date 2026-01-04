import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useEffect, useState, memo } from "react";

const ProfileAvatar = ({ src, name }) => {
  const [loadedSrc, setLoadedSrc] = useState(null);

  useEffect(() => {
    if (!src) return;

    const img = new Image();
    img.src = src;

    img.onload = () => setLoadedSrc(src);
    img.onerror = () => setLoadedSrc(null);

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src]);

  return (
    <Avatar
      size={40}
      src={loadedSrc}
      icon={<UserOutlined />}
      alt={name}
    />
  );
};

export default memo(ProfileAvatar);

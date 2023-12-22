import React from "react";
import { Link } from "react-router-dom";
import { Card } from "antd";
import { UserState } from "../../domain/types";
import "./UserDetails.scss";
import { ArrowLeftOutlined } from "@ant-design/icons";

interface UserDetailsProps {
  user: UserState;
}

const UserDetails: React.FC<UserDetailsProps> = ({ user }) => {
  return (
    <div className="card">
      <Link className="card__link" to={"/"}>
        <ArrowLeftOutlined className="card__link-arrow" />
        Go back
      </Link>
      <div className="card__wrapper">
        <Card className="card__container" title={user.email} bordered={false}>
          <p className="card__item">{user.name}</p>
          <p className="card__item">{user.body}</p>
        </Card>
      </div>
    </div>
  );
};

export default UserDetails;

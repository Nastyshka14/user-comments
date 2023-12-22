import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Input, List, Pagination } from "antd";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { UserState } from "../../domain/types";
import { setSearchItem } from "../../store/users/usersSlice";
import "./UsersList.scss";

interface UsersListProps {
  users: UserState[];
}

const UsersList: React.FC<UsersListProps> = ({ users }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useAppDispatch();

  const searchItem = useSelector((state: any) => state.users.searchItem);
  const filteredUsers = users.filter((user) =>
    user.email.toLowerCase().includes(searchItem.toLowerCase())
  );

  const itemsPerPage = 10;
  const totalItems = filteredUsers.length;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page: number): void => {
    setCurrentPage(page);
  };

  const handleSearchItemChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchItem(e.target.value));
  };

  return (
    <div className="users">
      <Input
        placeholder="Search users"
        value={searchItem}
        onChange={handleSearchItemChange}
        className="users__input"
      />
      <List
        className="users__list"
        dataSource={currentUsers}
        renderItem={(user) => (
          <List.Item>
            <Link to={`/users/${user.id}`}>{user.email}</Link>
          </List.Item>
        )}
      />
      <div className="pagination-container">
        <Pagination
          current={currentPage}
          total={totalItems}
          pageSize={itemsPerPage}
          onChange={handlePageChange}
          showSizeChanger={false}
          showQuickJumper={true}
          showTotal={(total) => `Total ${total} items`}
        />
      </div>
    </div>
  );
};

export default UsersList;
function dispatch(arg0: any) {
  throw new Error("Function not implemented.");
}

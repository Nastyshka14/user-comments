import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { fetchUsersAsync } from "../../store/users/usersAPI";
import { selectUsers } from "../../store/users/usersSlice";
import CharacterList from "../../components/UsersList/UsersList";
import "./HomePage.scss";

const HomePage: React.FC = () => {
  const dispatch = useAppDispatch();
  const users = useSelector(selectUsers);

  useEffect(() => {
    dispatch(fetchUsersAsync());
  }, [dispatch]);

  return (
    <div className="wrapper">
      <CharacterList users={users} />
    </div>
  );
};

export default HomePage;

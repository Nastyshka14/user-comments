import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { fetchUserAsync } from "../store/users/usersAPI";
import { selectUser } from "../store/users/usersSlice";
import UserDetails from "../components/UserDetails/UserDetails";

const CharacterPage: React.FC = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    dispatch(fetchUserAsync(Number(id)));
  }, [dispatch, id]);

  return <div>{user && <UserDetails user={user} />}</div>;
};

export default CharacterPage;

import axios from "axios";
import { API_BASE_URL } from "../constants/variables";

export const fetchUsers = async () => {
  const response = await axios.get(`${API_BASE_URL}/comments`);
  return response.data;
};

export const fetchUser = async (id: number) => {
  const response = await axios.get(`${API_BASE_URL}/comments/${id}/`);
  return response.data;
};

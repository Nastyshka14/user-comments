import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../api/userAPI';

export const fetchUsersAsync = createAsyncThunk(
  'users/fetchUsers',
  async () => {
    const data = await api.fetchUsers();
    return data;
  }
);

export const fetchUserAsync = createAsyncThunk(
  'users/fetchUser',
  async (id: number) => {
    const data = await api.fetchUser(id);
    return data;
  }
);
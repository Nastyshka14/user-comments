export interface UserState {
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface UsersState {
  data: UserState[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  selectedUser: UserState | null;
  searchItem: '',
}

export interface UsersStateType {
  currentUser: {
    confirmed: boolean;
    email: string;
    id: string;
    role: string;
    username: string;
  } | null;
}

export const UsersState: UsersStateType = {
  currentUser: null,
};

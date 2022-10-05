import { ReqType } from 'store';

export interface AuthStateType {
  value: number;
  isLoggedIn?: boolean | null;
  login: ReqType;
  createUser: ReqType;
}

export const AuthState: AuthStateType = {
  value: 0,
  login: {
    status: null,
    error: undefined,
  },
  createUser: {
    status: null,
    error: undefined,
  },
};

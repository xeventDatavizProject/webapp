export interface AuthStateType {
  value: number;
  isLoggedIn: boolean | null;
  login: {
    status: 'loading' | 'succeeded' | 'failed' | null;
    error?: string;
  };
  createUser: {
    status: 'loading' | 'succeeded' | 'failed' | null;
    error?: string;
  };
}

export const AuthState: AuthStateType = {
  value: 0,
  isLoggedIn: null,
  login: {
    status: null,
    error: undefined,
  },
  createUser: {
    status: null,
    error: undefined,
  },
};

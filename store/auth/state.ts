export interface AuthStateType {
  value: number;
  isLoggedIn: boolean;
  login: {
    status: 'loading' | 'succeeded' | 'failed' | null;
    error?: string;
  };
}

export const AuthState: AuthStateType = {
  value: 0,
  isLoggedIn: false,
  login: {
    status: null,
    error: undefined,
  },
};

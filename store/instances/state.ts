import { ReqType } from 'store';

export interface InstancesStateType {
  value: number;
  isLoggedIn: boolean | null;
  login: ReqType;
  instances: ReqType;
}

export const InstancesState: InstancesStateType = {
  value: 0,
  isLoggedIn: null,
  login: {
    status: null,
    error: undefined,
  },
  instances: {
    status: null,
    error: undefined,
  },
};

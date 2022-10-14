import { NotificationType, ReqType } from "store";

export interface NotificationStateType {
  notifications: ReqType & { data: NotificationType[] | null };
}

export const NotificationState: NotificationStateType = {
  notifications: {
    data: null,
    status: null,
  },
};

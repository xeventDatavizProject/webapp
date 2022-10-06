import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from './auth/reducer';
import InstancesReducer from './instances/reducer';
import QueriesReducer from './queries/reducer';
import UsersReducer from './users/reducer';

export const Store = configureStore({
  reducer: {
    AuthReducer,
    UsersReducer,
    InstancesReducer,
    QueriesReducer,
  },
});

export type RootState = ReturnType<typeof Store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof Store.dispatch;

export type ReqType = {
  status: 'loading' | 'succeeded' | 'failed' | null;
  error?: string;
};

export type QueriesType = {
  id: string;
  query: string;
  database_user: string;
  database_user_id: string;
  date_hour: string;
  timestamp: string;
  query_time: string;
  rows_sent: number;
  rows_examined: number;
};

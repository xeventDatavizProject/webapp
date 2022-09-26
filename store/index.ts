import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from './auth/reducer';
import UsersReducer from './users/reducer';

export const Store = configureStore({
  reducer: {
    AuthReducer,
    UsersReducer,
  },
});

export type RootState = ReturnType<typeof Store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof Store.dispatch;

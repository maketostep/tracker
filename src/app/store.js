import { configureStore } from '@reduxjs/toolkit';
import userReducer from '@/features/auth/userSlice';
import tasksReducer from '@/features/tasks/taskSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    tasks: tasksReducer,
  },
});

export default store;

import { configureStore } from '@reduxjs/toolkit';
// импортируй редьюсеры, которые у тебя есть
import authReducer from '@/features/auth/authSlice';
import tasksReducer from '@/features/tasks/taskSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    tasks: tasksReducer,
  },
});

export default store;

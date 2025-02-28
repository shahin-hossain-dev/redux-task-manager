import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./features/tasks/tasksSlice";
import userReducer from "./features/users/userSlice";
const store = configureStore({
  reducer: {
    taskReducer,
    userReducer,
  },
});

export default store;

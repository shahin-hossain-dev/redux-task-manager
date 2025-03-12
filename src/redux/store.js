import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./features/tasks/tasksSlice";
import userReducer from "./features/users/userSlice";
import { baseApi } from "./features/api/baseApi";
const store = configureStore({
  reducer: {
    taskReducer,
    userReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export default store;

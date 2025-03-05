import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [
    {
      id: 1,
      status: "pending",
      title: "Task 1",
      description: "Task Description",
      date: "2025-03-01",
      assignedTo: "Shahin Hossain",
      priority: "High",
    },
  ],
  userTasks: [],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, { payload }) => {
      if (state.tasks.length === 0) {
        state.tasks.push({ id: 1, status: "pending", ...payload });
      } else {
        const lastElement = state.tasks.at("-1");
        state.tasks.push({
          id: lastElement.id + 1,
          status: "pending",
          ...payload,
        });
      }
    },
    removeTask: (state, { payload }) => {
      const remainingTask = state.tasks.filter((task) => task.id !== payload);

      state.tasks = remainingTask;
    },
    updateStatus: (state, { payload }) => {
      const target = state.tasks.find((task) => task.id === payload.id);
      target.status = payload.status;
    },
    userTasks: (state, { payload }) => {
      state.userTasks = state.tasks.filter(
        (item) => item.assignedTo === payload
      );
    },
  },
});

export const { addTask, updateStatus, removeTask, userTasks } =
  tasksSlice.actions;

export default tasksSlice.reducer;

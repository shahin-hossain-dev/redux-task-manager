import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userTasks: [{ name: "Shahin", id: 1, email: "shahin@gmail.com" }],
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {},
});

export default userSlice.reducer;

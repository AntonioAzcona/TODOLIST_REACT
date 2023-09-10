import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    taskList: []
  },
  reducers: {
    setTasks: (state, action) => {
      state.taskList = action.payload.taskList
    }
  }
});

export const { setTasks } = todoSlice.actions

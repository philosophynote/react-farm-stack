import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { Task } from "../types/types";

export interface AppState { 
  editededTask: Task
  csrfTokenExp: boolean
}
const initialState: AppState = {   
  editededTask: { 
    id: "", 
    title: "", 
    description: "" 
  },
  csrfTokenExp: false,
}
export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: { 
    setEditedTask: (state, action: PayloadAction<Task>) => {
      state.editededTask = action.payload
    },
    resetEditedTask: (state) => {
      state.editededTask = initialState.editededTask
    },
    toggleCsrfState: (state) => {
      state.csrfTokenExp = !state.csrfTokenExp
    },
  },
})
export const { setEditedTask, resetEditedTask, toggleCsrfState } = 
  appSlice.actions

export const selectTask = (state: RootState) => state.app.editededTask
export const  selectCsrfState = (state: RootState) => state.app.csrfTokenExp
export default appSlice.reducer
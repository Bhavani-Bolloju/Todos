import { configureStore, PayloadAction } from "@reduxjs/toolkit";

import { createSlice } from "@reduxjs/toolkit";

export interface Item {
  text: string;
  date: string;
  id: string;
  status: Boolean;
}

const initialState: {
  items: Item[];
} = {
  items: [],
};

export const todoSlice = createSlice({
  name: "Todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Item>) => {
      state.items = [...state.items, action.payload];
    },
    changeStatus: (state, action: PayloadAction<String>) => {
      const items = [...state.items];
      const findItem = items.findIndex((item) => item.id === action.payload);
      const task = items[findItem];
      const updatedTask = { ...task, status: !task.status };
      items[findItem] = updatedTask;
      state.items = items;
    },
  },
});

export const { addTodo, changeStatus } = todoSlice.actions;
//creating STORE...............
export const store = configureStore({
  reducer: todoSlice.reducer,
});

//exporting actions

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

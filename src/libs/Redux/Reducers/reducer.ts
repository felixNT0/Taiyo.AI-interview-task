import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { ContactTypes } from "../../../types/ContactTypes";

export interface CounterState {
  value: ContactTypes[];
}

const initialState: CounterState = {
  value: [],
};

export const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<ContactTypes[]>) => {
      state.value = action.payload;
    },
    deleteContact:(state, action: PayloadAction<ContactTypes[]>)=> {
      state.value = action.payload;
    },
    editContact:(state, action: PayloadAction<ContactTypes[]>)=> {
      state.value = action.payload;
    },
  },
});

export const { addContact, deleteContact, editContact } = contactSlice.actions;

export default contactSlice.reducer;

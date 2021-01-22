import { createSlice } from "@reduxjs/toolkit";

// contacts data
import { CONTACTS } from "../../data/contactData";

const slice = createSlice({
  name: "contact",
  initialState: CONTACTS,
  reducers: {},
});

export const {} = slice.reducer;
export default slice.actions;

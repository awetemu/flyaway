import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { FlightSearch } from "../../types/Flight";

const initialState: FlightSearch = {
  from: "",
  to: "",
};

const flightSlice = createSlice({
  name: "flight",
  initialState,

  reducers: {
    setFrom: (state, action: PayloadAction<string>) => {
      state.from = action.payload;
    },

    setTo: (state, action: PayloadAction<string>) => {
      state.to = action.payload;
    },
  },
});

export const { setFrom, setTo } = flightSlice.actions;

export default flightSlice.reducer;
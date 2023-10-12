import { configureStore } from "@reduxjs/toolkit";
import counterSlice  from "./Myactions";

export const Mystore = configureStore({
    reducer: {
        counter: counterSlice,
      }
})
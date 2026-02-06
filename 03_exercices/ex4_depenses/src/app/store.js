import { configureStore } from "@reduxjs/toolkit";
import expensesReducer from "../feature/expenseSlice"


export const store = configureStore({
    reducer : {
        expenses: expensesReducer,
    },
});
import {  createSlice, nanoid } from "@reduxjs/toolkit"

const expensesSlice = createSlice({
    name: "expenses",
    initialState : {
        items : [
            { id: "e1",label : "Courses", amount : 66.8, category: "Alimentation", date: "2026-02-06"},
            { id: "e2",label : "Essence", amount : 99.3, category: "Transport", date: "2026-02-05"},
        ]
    },
    reducers: {
        addExpense(state,action) {
            const {label,amount,category,date} = action.payload;
            state.items.unshift({
                id: nanoid(),
                label,
                amount: Number(amount),
                category,
                date
            });
        },
        removeExpense(state,action){
            const id = action.payload;
            state.items = state.items.filter(e => e.id !== id)
        }
    }
})

export const {addExpense, removeExpense} = expensesSlice.actions;
export default expensesSlice.reducer;
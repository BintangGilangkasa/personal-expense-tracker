import { createSlice } from "@reduxjs/toolkit";

const storageKey = "transactions";
const initialState = {
    items: JSON.parse(localStorage.getItem(storageKey) || "[]")

};

const transactionSlice = createSlice({
    name: "transaction",

    initialState,

    reducers: {

        addTransaction: (state, action) => {
            state.items.push(action.payload);
            localStorage.setItem(storageKey, JSON.stringify(state.items));
        },

        deleteTransaction: (state, action) => {
            state.items = state.items.filter((transaction) => transaction.id !== action.payload);
            localStorage.setItem(storageKey, JSON.stringify(state.items));
        },

        updateTransaction: (state, action) => {
            const index = state.items.findIndex((transaction) => transaction.id === action.payload.id);

            if (index !== -1) {
                state.items[index] = action.payload;
                localStorage.setItem(storageKey, JSON.stringify(state.items));
            }
        }
    }
});

export const {
    addTransaction,
    deleteTransaction,
    updateTransaction
} = transactionSlice.actions;

export default transactionSlice.reducer;

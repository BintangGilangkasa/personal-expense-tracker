import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    transaction: []

};

const transactionSlice = createSlice({
    name: "transaction",

    initialState,

    reducers: {

        addTransaction: (state, action) => {
            state.transaction.push(
                action.payload
            );
        },

        deleteTransaction: (state, action) => {
            state.transaction 
            state.transaction.filter(
                (transaction) =>
                    transaction.id !== action.payload
            );
        },

        updateTransaction: (state, action) => {
            const index = 
            state.transaction.findIndex(
                (transaction) =>
                    transaction.id === action.payload.id
            );

            if (index !== -1) {
                state.transaction[index] =
                    action.payload;
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

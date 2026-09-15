import { configureStore } from "@reduxjs/toolkit";

import transactionReducer from "../features/transactions/transactionSlice";
import categoryReducer from "../features/categories/categorySlice";
import authReducer from "../features/auth/authSlice";

const store = configureStore({
    reducer: {
        transaction: transactionReducer,
        categories: categoryReducer,
        auth: authReducer
    }

});

export default store;
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCategories = createAsyncThunk("categories/fetch", async () => {
    const response = await fetch("/categories.json");
    if (!response.ok) throw new Error("Kategori gagal dimuat");
    return response.json();
});

const initialState = {
    items: [],
    status: "idle",
    error: null
};

const categorySlice = createSlice({
    name: "categories",

    initialState,

    reducers: {},

    extraReducers: (builder) => {
        builder

            .addCase(
                fetchCategories.pending,
                (state) => {
                    state.status = "loading";
                    state.error = null;
                }
            )

            .addCase(
                fetchCategories.fulfilled,
                (state, action) => {
                    state.status = "success";
                    state.items = action.payload;
                }
            )

            .addCase(
                fetchCategories.rejected,
                (state, action) => {
                    state.status = "error";
                    state.error = action.error.message;
                }
            );
    }
});

export default categorySlice.reducer;
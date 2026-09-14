import { createSlice } from "@reduxjs/toolkit";

const storedUser = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
const storedToken = localStorage.getItem('token') || null;

const initialStat = {
    user: storedUser,
    token: storedToken,
    isLoading: false,
    error: null
};

const authSlice = createSlice({
    name: 'auth',
    initialStat,
    
})
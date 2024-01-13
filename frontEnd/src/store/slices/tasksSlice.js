import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: [],
    reducers: {},
    extraReducers(builder){
        builder.addCase()
    }
})

export const tasksReducer = tasksSlice.reducer;
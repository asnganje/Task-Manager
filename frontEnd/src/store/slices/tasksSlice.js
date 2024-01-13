import { createSlice } from "@reduxjs/toolkit";
import { createTask, getTasks, removeTask } from "../thunks/tasksThunk";

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        isLoading: false,
        data:[]
    },
    reducers: {},
    extraReducers(builder){
        builder.addCase(createTask.pending, (state)=> {
            state.isLoading = true;
        }),
        builder.addCase(createTask.fulfilled, (state, action)=> {
            state.isLoading = false;
            state.data.push(action.payload)
        }),
        builder.addCase(createTask.rejected, (state)=> {
            state.isLoading = false;
        }),
        builder.addCase(getTasks.pending, (state)=> {
            state.isLoading = true;
        }),
        builder.addCase(getTasks.fulfilled, (state,action)=> {
            state.isLoading = false;
            state.data = [...state.data, ...action.payload]
            return state;
        }),
        builder.addCase(getTasks.rejected, (state)=> {
            state.isLoading = false;
        }),
        builder.addCase(removeTask.pending, (state)=> {
            state.isLoading = true;
        }),
        builder.addCase(removeTask.fulfilled, (state,action)=> {
            state.isLoading = false;
            state.data = state.data.filter((task)=>task._id !== action.payload)
            return state
        }),
        builder.addCase(removeTask.rejected, (state)=> {
            state.isLoading = false;
        })


    }
})

export const tasksReducer = tasksSlice.reducer;
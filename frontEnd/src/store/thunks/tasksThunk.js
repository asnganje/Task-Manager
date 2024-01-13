import {createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';

const url = "http://localhost:3000/api/v1/tasks"

const createTask = createAsyncThunk('tasks/createTask', async(newTask)=> {
    try {
         const response = await axios.post(url, newTask)
        return response.data.message
    } catch (error) {
        console.error('Error creating task:', error);
        throw error;
    }
})


const getTasks = createAsyncThunk('tasks/getTasks', async ()=> {
    try {
       const tasks = await axios.get(url)
       return tasks.data.message
    } catch (error) {
        console.error('Error loading tasks:', error);
        throw error
    }
})

const removeTask = createAsyncThunk('tasks/removeTask', async(id)=> {
    try {
        await axios.delete(`http://localhost:3000/api/v1/tasks/${id}`)
        return id
    } catch (error) {
        console.error('Error loading tasks:', error);
        throw error
    }
})
export {createTask, getTasks, removeTask}
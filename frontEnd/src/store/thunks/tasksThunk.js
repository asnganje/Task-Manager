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

const updateTask = createAsyncThunk('tasks/updateTask', async(content)=> {
    
    const id = content.item._id;
    const newItem = content.newItem;
    try {
        const updatedTask = await axios.patch(`http://localhost:3000/api/v1/tasks/${id}`, {
            name: newItem
        })
        console.log(updatedTask.data);
        return updatedTask.data
    } catch (error) {
        console.error('Error loading tasks:', error);
        throw error
    }
})

const toggleTaskComplete = createAsyncThunk('tasks/toggleTaskComplete', async({taskID, completed})=> {
    try {
        const response = await axios.patch(`http://localhost:3000/api/v1/tasks/${taskID}`, {
            completed: completed})
            return response.data;
    } catch (error) {
        console.error('Error loading tasks:', error);
        throw error
    }
})
export {createTask, getTasks, removeTask, updateTask, toggleTaskComplete}
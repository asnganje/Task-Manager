import {createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const createTask = createAsyncThunk('tasks/createTask', ({task, completed})=> {
    const url = "http://localhost:3000/api/v1/tasks/"
    try {
        const results = axios.post(url, {task, completed})
        console.log(results.data);
        return results.data
    } catch (error) {
        throw new Error('Failed to create task')
    }
})

export {createTask}
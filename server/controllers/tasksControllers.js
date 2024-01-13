const Task = require('../models/taskModel')

const getAllTasks = async(req,res) => {
    try {
        const tasks = await Task.find({})
        res.status(200).json({
            status: 'success',
            message: tasks
        })
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: 'Tasks could not be retrieved'
        })
    }
}

const createTask = async(req,res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({
            status: 'success',
            message: task
        })
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: 'task could not be created'
        })
    }
}

const getTask = async(req,res) => {
    try {
        const task = await Task.findById(req.params.id)
        res.status(200).json({
            status: 'success',
            message: task
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: 'Could not get the task' 
        })
    }
}

const updateTask = async(req,res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({
            status: 'success',
            message: task
        })
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: 'Could not update task'
        })
    }
}

const removeTask = async(req,res) => {
    try {
        await Task.findByIdAndDelete(req.params.id)
        res.status(200).json({
            status: 'success',
            message: 'Task successfully deleted'
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: 'Could not delete task'
        })
    }
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    removeTask
}
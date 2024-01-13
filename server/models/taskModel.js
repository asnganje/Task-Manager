const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'please provide task name'],
        trim: true,
        maxLength: [20, 'A maximum of 20 characters allowed']
    },
    completed: {
        type: Boolean,
        default: false
    }

})

const Task = mongoose.model('Task', taskSchema)
module.exports = Task;
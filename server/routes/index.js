const express = require('express')
const router = express.Router()
const {getAllTasks, 
        getTask, 
        updateTask,
        removeTask,
        createTask
    } = require('../controllers/tasksControllers')

router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(removeTask)
module.exports = router;
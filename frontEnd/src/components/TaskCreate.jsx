import { useState } from "react"
import { useDispatch } from "react-redux"
import { createTask } from "../store/thunks/tasksThunk"

const TaskCreate = () => {

    const [task, setTask] = useState('')
    const dispatch = useDispatch()
    const newTaskHandler = (e) => {
        setTask(e.target.value)
    }
    const newTask = {name: task}
    const submitHandler = (e)=> {
        e.preventDefault()
        dispatch(createTask(newTask))
        setTask('')
    }

    return(
            <div className="shadow-2xl p-5 mb-3">
                <h2 className="text-center text-2xl font-bold">Task Manager</h2>
            
                <form onSubmit={submitHandler} className="flex gap-2">
                <input 
                className="border w-[40vh] p-2 cursor-pointer"
                placeholder="e.g wash clothes"
                type="text" 
                value={task}
                onChange={newTaskHandler}
                />

                <button className="bg-blue-500 rounded-md w-[15vh] text-xl text-white p-2">Submit</button>
            </form>
            </div>
    )
}
export default TaskCreate
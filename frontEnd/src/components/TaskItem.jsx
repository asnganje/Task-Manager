import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { useState } from "react";
import EditTask from "./editTask";
import { removeTask, toggleTaskComplete } from "../store/thunks/tasksThunk";
import { useDispatch } from "react-redux";

const TaskItem = ({task}) => {
    const [edit, setEdit] = useState(false)
    const dispatch = useDispatch()

    const handleDelete = (id) => {
        dispatch(removeTask(id))
    }
    const handleEdit = () => {
        if (task.completed) {
            setEdit(false)
        } else{
            setEdit(true)
        }
    }
    
    const handleToggleComplete = (task) => {
        const {_id, completed} = task;
        dispatch(toggleTaskComplete({taskID: _id, completed: !completed}))
    }
    return(
        <div>
        {!edit?
        <div className="flex justify-between shadow-2xl p-3 w-[60vh]">
            <div className="flex gap-2">
                <input type="checkbox" 
                className="cursor-pointer w-5 h-5 border mt-1"
                checked = {task.completed}
                onChange={()=>handleToggleComplete(task)}
                />
                <p className={`${task.completed? 'line-through': 'none' }`}>{task.name}</p>
            </div>
            <div className="flex gap-2">
                <CiEdit onClick={handleEdit} className="text-2xl cursor-pointer hover:text-black"/>
                <MdDelete onClick={()=>handleDelete(task._id)} className="text-2xl cursor-pointer text-red-500"/>
            </div>
        </div>:
        <div>
            <EditTask setEdit = {setEdit} task = {task}/>
        </div>
        }
        </div>
        )
}
export default TaskItem
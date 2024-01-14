import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { useState } from "react";
import EditTask from "./editTask";
import { removeTask, getTasks } from "../store/thunks/tasksThunk";
import { useDispatch } from "react-redux";

const TaskItem = ({task}) => {
    const [edit, setEdit] = useState(false)
    const dispatch = useDispatch()

    const handleDelete = (id) => {
        dispatch(removeTask(id))
    }
    const handleEdit = () => {
            setEdit(true)
    }
    
    return(
        <div>
        {!edit?
        <div className="flex justify-between shadow-2xl p-3 w-[60vh]">
            <div className="flex gap-2">
                <input type="checkbox" className="cursor-pointer p-1"/>
                <p>{task.name}</p>
            </div>
            <div className="flex gap-2">
                <CiEdit onClick={handleEdit} className="text-2xl cursor-pointer"/>
                <MdDelete onClick={()=>handleDelete(task._id)} className="text-2xl cursor-pointer"/>
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
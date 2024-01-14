import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import { updateTask } from '../store/thunks/tasksThunk'

const EditTask = ({setEdit, task}) => {
    const tasks = useSelector((state)=>state.tasks.data)
    const item = tasks.find((el)=>el._id === task._id)
    const [edited, setEdited] = useState(item.name)
    const dispatch = useDispatch()

    const removeEditHandler = () => {
        setEdit(false)
    }
    const editHandler = (e) => {
        setEdited(e.target.value)
    }
    const content = {item, newItem: edited}
    const handleEditedSubmit = (e) => {
        e.preventDefault();
        dispatch(updateTask(content))
    }

    return(
        <form onSubmit={handleEditedSubmit} className='flex flex-col items-center shadow-2xl bg-blue-300 p-3 rounded-md opacity-100'>
            <div className='space-x-2'>
                <input 
                className='rounded-md p-2'
                type="text"
                value={edited}
                onChange={editHandler} 
                />
                <button 
                type="submit"
                className="bg-gray-500 rounded-md w-[15vh] text-white p-1"
                >
                    Edit
                </button>
            </div>
            <Link to='/' className='text-white font-bold hover:underline' onClick={removeEditHandler}>Back to tasks</Link>
        </form>

    )
    
}

export default EditTask;
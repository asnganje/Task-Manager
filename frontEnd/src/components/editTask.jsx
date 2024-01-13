import {Link} from 'react-router-dom'
const EditTask = ({setEdit}) => {
    const removeEditHandler = () => {
        setEdit(false)
    }
    return(
        <div className='flex flex-col items-center'>
            <div>Edit Task</div>
            <Link to='/' onClick={removeEditHandler}>Back to tasks</Link>
        </div>

    )
    
}

export default EditTask;
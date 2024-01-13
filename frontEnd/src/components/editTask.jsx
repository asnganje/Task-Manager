import {Link} from 'react-router-dom'
const EditTask = () => {
    return(
        <div>
            <div>Edit Task</div>
            <Link to='/api/v1/tasks'>Back to tasks</Link>
        </div>

    )
    
}

export default EditTask;
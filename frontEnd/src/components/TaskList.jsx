import TaskItem from "./TaskItem"
import { useSelector} from 'react-redux'

const TaskList = () => {

    const {data, isLoading} = useSelector((store)=>store.tasks)
    if(isLoading) {
        return(
            <h3 className="text-center text-blue-500 text-lg italic">Loading...</h3>
        )
    }

    const renderedTasks = data.map((task)=> {
        return(
            <div key={task._id}>
                 <TaskItem task = {task} />   
            </div>
        )
    })
    return(
        <div className="opacity-1 mt-5">
            {renderedTasks}
        </div>
    )
}
export default TaskList
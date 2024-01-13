import TaskCreate from './TaskCreate'
import TaskList from './TaskList'

const DashBoard = () => {
    return(
        <div  className="flex flex-col items-center p-5 font-mono">
            <TaskCreate />
            <TaskList />
        </div>
    )
}
export default DashBoard;
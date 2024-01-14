import { useEffect } from "react"
import TaskCreate from './TaskCreate'
import TaskList from './TaskList'
import { getTasks } from "../store/thunks/tasksThunk"
import { useDispatch } from "react-redux"

const DashBoard = () => {
    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(getTasks())
    }, [])
    
    return(
        <div  className="border rounded-md mx-[35%] h-[90vh] mt-5 flex flex-col text-xl gap-10 items-center p-5 font-mono">
            <TaskCreate />
            <TaskList />
        </div>
    )
}
export default DashBoard;
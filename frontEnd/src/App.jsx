import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";

const App = ()=> {
    return(
        <div className="flex flex-col items-center p-5">
            <div>
                <h2>Task Manager</h2>
                <TaskCreate />
            </div>
            <div>
                <TaskList />
            </div>
        </div>
    )
}

export default App;
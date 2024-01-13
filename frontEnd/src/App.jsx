import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";

const App = () => {
  return (
    <div className="flex flex-col items-center p-5 font-mono">
      <div className="shadow-2xl p-5 mb-3">
        <h2 className="text-center text-2xl font-bold">Task Manager</h2>
        <TaskCreate />
      </div>
      <div>
        <TaskList />
      </div>
    </div>
  );
};

export default App;

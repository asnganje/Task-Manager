import { MdDelete } from "react-icons/md";

const TaskItem = () => {
    return(
        <div className="flex justify-between shadow-2xl p-3 w-[60vh]">
            <p>Task Item</p>
            <div className="flex">
                <input type="checkbox" className="p-1"/>
                <MdDelete className="text-2xl"/>
            </div>
        </div>
    )
}
export default TaskItem
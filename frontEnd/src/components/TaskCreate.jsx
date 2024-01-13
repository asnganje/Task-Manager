const TaskCreate = () => {

    const submitHandler = (e)=> {
        e.preventDefault()
    }

    return(
            <div className="shadow-2xl p-5 mb-3">
                <h2 className="text-center text-2xl font-bold">Task Manager</h2>
            
                <form onSubmit={submitHandler} className="flex gap-2">
                <input 
                className="border w-[40vh] p-2 cursor-pointer"
                placeholder="e.g wash clothes"
                type="text" />
                <button className="bg-blue-500 rounded-md w-[15vh] text-xl text-white p-2">Submit</button>
            </form>
            </div>
    )
}
export default TaskCreate
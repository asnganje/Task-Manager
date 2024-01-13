const TaskCreate = () => {

    const submitHandler = (e)=> {
        e.preventDefault()
    }

    return(
            <form onSubmit={submitHandler} className="flex gap-2">
                <input 
                className="border w-[40vh] p-2 cursor-pointer"
                placeholder="e.g wash clothes"
                type="text" />
                <button className="bg-blue-500 rounded-md w-[15vh] text-xl text-white p-2">Submit</button>
            </form>
    )
}
export default TaskCreate
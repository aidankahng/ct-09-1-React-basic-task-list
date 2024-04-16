import { useState } from "react";
import TaskCard, {Task} from "./Task";


export default function TaskForm(){

    const [taskList, setTasks] = useState<Task[]>([])
    

    const addTask = (e:any) => {
        e.preventDefault();
        let newTask:Task = {
            title:e.target[0].value, 
            description:e.target[1].value
        }
        taskList.push(newTask)
        setTasks(taskList.slice(0,))
    }


    return (
        <>
        <form onSubmit={(addTask)} style={{display:'flex', justifyContent:'center', margin:'20px'}}>
            <input name='title' type='text' placeholder="Title"></input>
            <input name='title' type='text' placeholder="To-Do Description" style={{marginLeft:'20px'}}></input>
            <button type="submit" style={{marginLeft:'20px'}}>Add To-Do</button>
        </form>
        <TaskCard tasks={taskList} />
        </>
    )
}
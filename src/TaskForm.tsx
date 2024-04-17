import { useState } from "react";
import TaskCard, {Task} from "./TaskCard";


export default function TaskForm(){

    const [taskList, setTasks] = useState<Task[]>([])
    

    const addTask = (e:any) => {
        e.preventDefault();
        let newTask:Task = {
            title:e.target[0].value, 
            description:e.target[2].value,
            dueDate: e.target[1].value.toString(),
            completed: false
        }
        taskList.push(newTask)
        setTasks(taskList.slice(0,))
    }


    return (
        <>
        <form onSubmit={(addTask)} style={{display:'flex', justifyContent:'center', margin:'20px'}}>
            <div>
                <label>Title</label><br/>
                <input name='title' type='text' placeholder="Title"/>
                <p>Due Date</p>
                <input name='Due Date' type='date' />
            </div>
            <div style={{marginLeft:'20px'}}>
                <p>Description</p>
                <textarea name="description" id="description" cols={25} rows={5} ></textarea>
            </div>
            <div style={{marginLeft:'20px'}}>
                <button type="submit" >Add To-Do</button>
            </div>
            

            
            
        </form>
        <TaskCard tasks={taskList} />
        </>
    )
}
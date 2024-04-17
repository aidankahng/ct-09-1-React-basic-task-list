import { useState } from "react";
import { Task } from "./types";

type TaskCardProps = {
    task: Task;
};
export default function TaskCard({ task }: TaskCardProps) {
    const [completionStatus, setCompletionStatus] = useState<boolean>(task.completed)

    const toggleComplete = () => {
        task.completed = !completionStatus
        setCompletionStatus(!completionStatus);
    }


    return (
        <>
            <div
                style={{
                    border: "solid black 1px",
                    margin: "5px 30px",
                    textAlign: "center",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                }}
            >
                <div></div>
                <div>
                    <h2 key={task.title}>{task.title}</h2>
                    <p>Due Date: {task.dueDate}</p>
                </div>
                <div style={{ width: "30%" }}>
                    <p key={task.description}>{task.description}</p>
                </div>
                <div>
                    <label>Completed: <span style={{color:`${task.completed ? 'green' : 'red'}`}}>{task.completed.toString()}</span> </label>
                </div>
                <div>
                    <button onClick={toggleComplete}>{task.completed ? 'Mark Incomplete' : 'Mark Complete'}</button>
                </div>
            </div>
        </>
    );
}

import TaskCard from "./TaskCard";
import { Task } from "./types";

type TaskCardsProps = {
    tasks: Task[];
};

export default function TaskCards({ tasks }: TaskCardsProps) {
    return (
        <>
            {tasks.map((t) => (
                <TaskCard task={t} />
            ))}
        </>
    );
}

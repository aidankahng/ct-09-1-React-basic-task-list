export type Task = {
    title: string,
    description: string,
    dueDate: string,
    completed: boolean
}

type TaskCardProps = {
    tasks: Task[]
}


export default function TaskCard({ tasks }: TaskCardProps) {

    return (
        <>
        {tasks.map((t) => (
            <>
            <div style={{border:'solid black 1px', margin:'5px 30px', textAlign:'center', display:'flex', alignItems:'center', justifyContent:'space-evenly'}}>
                <div></div>
                <div>
                    <h2 key={t.title}>{t.title}</h2>
                    <p>Due Date: {t.dueDate}</p>
                </div>
                <div style={{width:'30%'}}>
                    <p key={t.description}>{t.description}</p>
                </div>
                <div>
                    <label>Completed: </label>
                    <input type="checkbox" name="completed"/>
                </div>
                <div></div>
                
            </div>
            </>
        ))}
        </>
    )
}
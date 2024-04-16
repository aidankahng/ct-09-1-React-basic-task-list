
export type Task = {
    title: string,
    description: string
}

type Tasks = {
    tasks: Task[]
}


export default function TaskCard({ tasks }: Tasks) {
    console.log('INSIDE TASK.TSX: ', tasks)

    return (
        <>
        {tasks.map((t) => (
            <>
            <div style={{border:'solid black 1px', margin:'5px 30px', textAlign:'center'}}>
                <h4 key={t.title}>{t.title}</h4>
                <p key={t.description}>{t.description}</p>
            </div>
            </>
        ))}
        </>
    )
}
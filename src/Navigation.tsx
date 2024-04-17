
export default function Nav() {
    return (
        <>
            <div
                className="navbar"
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                    backgroundColor: "grey",
                }}
            >
                <h3>To Do List</h3>
                <p>Reset</p>
                <p>Add More</p>
            </div>
        </>
    );
}

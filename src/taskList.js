import { Link } from 'react-router-dom';

const TaskList = ({ Tasks, title }) => {
    // const Tasks = props.Tasks
    // const title = props.title
    return (
        <div className="Task-list">
            <div className='flex'>
                <h2>{title}</h2>
                {Tasks && <p>you have ({Tasks.length}) tasks</p>}
            </div>

            {
                Tasks.map((Task) => (
                    <div className="Task-preview" key={Task.id}>
                        <Link to={`/Tasks/${Task.id}`}>
                            <h2>{Task.title}</h2>
                            <p>{Task.author}</p>
                            {/* <button onClick={()=>handleDelete(Task.id)}>delete</button> */}
                        </Link>
                    </div>

                ))
            }
        </div>
    );
}

export default TaskList;
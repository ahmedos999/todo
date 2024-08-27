import {useParams} from 'react-router-dom'
import useFetch from "./useFetch";
import {useNavigate} from "react-router-dom";
const TaskDetails = () => {
    const {id} =  useParams();
    const {data:Task,error,isPending} = useFetch('http://localhost:8000/Tasks/'+ id);
    const history = useNavigate();

    const handleDelete = () =>{
        fetch('http://localhost:8000/Tasks/'+ Task.id,{
            method:'DELETE',
        }).then(()=>{
            history('/')
        })
    }
    
    return ( <div className="Task-details">
        {isPending && <div> Loading... </div>}
        {error && <div> {error} </div>}
        {
            Task && (
            <article>
                <h2>{Task.title}</h2>
                <p>written by {Task.author}</p>
                <div>{Task.body}</div>
                <button onClick={()=>handleDelete(Task.id)}>Delete</button>
            </article>)
        }
    </div> );
}
 
export default TaskDetails;
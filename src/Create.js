import { useState } from "react";
import {useNavigate} from "react-router-dom";

const Create = () => {
    const [title,setTitle] = useState('');
    const [body,setBody] = useState('');
    const [author,setAuthor] = useState('yoshi');
    const [isPending,setIsPending] = useState(false);
    const history = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();

        const task = {title,body,author};

        setIsPending(true);
        fetch('http://localhost:8000/Tasks',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(task)
        }).then(()=>{
        console.log('new Task added');
        setIsPending(false);
        history('/')
    
    });
        
    }

    return ( <div className="create">
        <h2>Add New Todo</h2>
        <form onSubmit={handleSubmit}>
            <label>Task title:</label>
            <input type="text" required value={title} onChange={(e)=>setTitle(e.target.value)}/>
            <label>Task body:</label>
            <textarea required value={body} onChange={(e)=>setBody(e.target.value)}></textarea>
            <label>Task author:</label>
            <select value={author} onChange={(e)=>setAuthor(e.target.value)}>
                <option value="mario">Ahmed</option>
                <option value="yoshi">Sheikh</option>
            </select>
            {!isPending && <button>Add Task</button>}
            {isPending && <button>Adding Task..</button>}
        </form>
    </div> );
}
 
export default Create;
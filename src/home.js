import useFetch from "./useFetch";
import TaskList from "./taskList";


const Home = () => {
    const {data:tasks,isPending,err} = useFetch('http://localhost:8000/Tasks')

    return ( 
        <div className="home">
            {isPending && <div>Loading...</div>}
            {err && <div> {err} </div>}
           {tasks && <TaskList Tasks={tasks} title="All Tasks"/>}
            </div>
     );
}
 
export default Home;
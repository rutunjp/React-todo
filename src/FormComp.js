import { useState } from "react";
 let taskList=[];
const FormComp=() =>{ 
    const [task, updateTask] = useState(""); 
    return(
    <div>
    <form onSubmit={(e)=>{
        e.preventDefault();
        taskList.push(`${task}`);
        updateTask(e.target.value);   
        updateTask('');
        console.log(typeof(taskList));
    }}>
        <label htmlFor="task">Enter Task:</label>
        <input type="text" value={task} onChange={(e)=>{updateTask(e.target.value); }} />               
        <button type='submit'>Submit</button>
        
    </form>
    <ul> 
       {taskList.map((task)=>(
           <li key={task}>{task}</li>
       ))
       }
    </ul>
    
    </div>
    );
    
}; 

export default FormComp;
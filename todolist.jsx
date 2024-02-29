import {useState} from 'react'



export function Todolist() {
    const[tasks,setTasks] = useState(["eat breakfast", "take shower"]);
    const[newTask,setNewTask] = useState("");

    function handleInputChange(event) {
         setNewTask(event.target.value);
    }

    function addTask() {
     if(newTask.trim()!==("")) {
      setTasks(t => [...t, newTask]);
     setNewTask("");}

    }
    
    function removeTask(index) {
        const updatedTasks = tasks.filter((_,i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index) {
        if(index > 0) {
        const updatedTasks = [...tasks];
        [updatedTasks[index],updatedTasks[index-1]] = [updatedTasks[index-1],updatedTasks[index]]
        setTasks(updatedTasks);
      }
    }

    function moveTaskdown(index) {
      if(index < tasks.length - 1) {
        const updatedTasks = [...tasks];
        [updatedTasks[index],updatedTasks[index+1]] = [updatedTasks[index+1],updatedTasks[index]]
        setTasks(updatedTasks); 
      } }


  return(
  <div className='todo-list'>
   <h1>Todo-list</h1>
   <div>
     <input type="text" 
     placeholder="enter food name.."
     className="taskInput" 
     value={newTask}
     onChange={handleInputChange} 
     />
   <button className="add-button" onClick={addTask}>Add</button> 
    </div>

    <ol>

            {tasks.map((task, index) => <li key={index}>
            <span className="text" >{task}</span>
            <button className="delete-button"
            onClick={() =>removeTask(index)}
            >delete</button> 
            <button className="move-button"
            onClick={() =>moveTaskUp(index)}
            >Up</button>
            <button className="move-button"
            onClick={() =>moveTaskdown(index)}
            >Down</button></li> 
            )}
    </ol>

  </div>)}
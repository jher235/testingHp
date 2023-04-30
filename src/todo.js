import {useState, useEffect } from "react";

function App() {
  const [todo,setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const onChange=(event)=>{ 
    setTodo(event.target.value);
  }
  const delect =(index)=> {
    setTodos(todos.filter((item,todoIndex) => index !==todoIndex));
    
  }

  const onSubmit =(event)=>{
    event.preventDefault();
    if(todo===""){
      return;
    }
    setTodos((prevArray)=> [...prevArray,todo]);
    setTodo("");
}
    console.log(todos)

  
  return (
    
      <div>
        <h1>My To Do List({todos.length})</h1>
        <form onSubmit={onSubmit}>
          <input onChange={onChange} value={todo} type ="text" placeholder = "Write your to do...."/>
          <button>Add To Do</button>
        </form>
        <hr />
          <ul>
            {todos.map((td,index)=><li key={index}>{td}<button onClick={()=>delect(index)}>❌</button></li>)}
          </ul>
     </div>
   
  );
}

export default App;





import { useState } from "react";
import styles from "./form.module.css";
function Form({todos,setTodos})
{
     const[todo,setTodo] = useState("");

      function handleSubmit(e)
    {
        e.preventDefault();
        setTodos([...todos,todo]);
        setTodo("");
    }

    return <div>
         <form className={styles.todoform} onSubmit={handleSubmit}>
            <div className={styles.inputContainer}><input className={styles.modernInput} onChange= {(e)=>setTodo(e.target.value)}  value={todo} placeholder="Enter Todo Item.." />
            <button className={styles.modernbutton}>Add</button>
            </div>
            
        </form>
    </div>
}
export default Form
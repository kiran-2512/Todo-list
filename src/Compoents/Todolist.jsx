import Todoitem from "./Todoitem";
import styles from "./todolist.module.css";
function Todolist({todos,setTodos})
{
    return <div className={styles.list}>
          {todos.map((item) =>(<Todoitem key = {item}  item= {item} todos={todos} setTodos={setTodos}/>
        ))}
    </div>
}
export default Todolist
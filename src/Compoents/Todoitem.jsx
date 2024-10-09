import styles from "./todoitem.module.css";
function Todoitem({item,todos,setTodos})
{
    function handleDelete(item) {
        console.log("Delete Button got clicked" ,item)
        setTodos(
        todos.filter((todo)=> todo!== item));
    }
    return (
    <div className={styles.item}>
        <div className={styles.itemName}>
            <h3>{item}<span>
                <button onClick={()=>{handleDelete(item)}} className={styles.deletebutton}>X</button>
            </span></h3>
        </div>
        <hr className={styles.line}/>
    </div>
)}
export default Todoitem
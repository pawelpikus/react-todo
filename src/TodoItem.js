import './TodoItem.css'

function TodoItem(props){
    return (
        <div className="todo">
            <input 
                type="checkbox" 
                checked={props.item.completed}
                onChange={() => props.handleChange(props.item.id)}/>
            <p className={props.item.completed ? "todo-text completed": "todo-text"}>{props.item.title}</p>
            
        </div>
    )
}
export default TodoItem
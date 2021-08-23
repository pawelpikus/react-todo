import './TodoItem.css'

function TodoItem(props){
    return (
        <div className="todo">
            <input 
                type="checkbox" 
                checked={props.item.completed}
                onChange={() => props.handleChange(props.item.id)}/>
            <p className="todo-text">{props.item.title}</p>
            
        </div>
    )
}
export default TodoItem
import './TodoItem.css'

function TodoItem(props){
    return (
        <div className="todo">
            <input type="checkbox" name="tick" id="checkbox-tick" defaultChecked="true"/>
            <p className="todo-text">{props.title}</p>
            
        </div>
    )
}
export default TodoItem
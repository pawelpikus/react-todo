import React from 'react';
import './App.css';
import TodoItem from './TodoItem'

class App extends React.Component {
  constructor(){
    super()
    this.state= {}
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users/1/todos')
    .then(res => res.json())
    .then(data => {
      this.setState({todos: data})
    })
  }

  componentDidUpdate(){

  }

  render() {
    const todoItemsArr = this.state.todos && this.state.todos.map(todo => <TodoItem key={todo.id} title={todo.title}/>)
    return ( 
    <div className = "container" >
      <h1 className="title">My Todos</h1>
      {todoItemsArr}
    </div>
    )
  }
}

export default App;
import React from 'react';
import './App.css';
import TodoItem from './TodoItem'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      todos: []
    }
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users/1/todos')
    .then(res => res.json())
    .then(
      (result) => { this.setState(
        {
          isLoaded: true,
          todos: result
        });
    },
    (error) => { this.setState(
      {
        isLoaded: true,
        error
      });
    }
  )
}

  handleChange(id){
    this.setState(prevState => {
      const updatedItems = prevState.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo;
      });
      return { todos: updatedItems };
    })
  }

  render() {
    const { error, isLoaded, todos } = this.state;

    if(error){
        return <div>Error: {error.message}</div>;
    } else if(!isLoaded){
        return <div>Loading...</div>;
    } else {
      
      const todoItemsArr = todos && todos.slice(0,5)
      .map(todo => <TodoItem key={todo.id} item = {todo} handleChange={this.handleChange}/>)
      
      return ( 
        <div className = "container" >
          <h1 className="title">My Todos</h1>
          {todoItemsArr}
        </div>
      )
    }
  }
}

export default App;
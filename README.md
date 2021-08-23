# Todo app - learning React state

This is just a short exercise to pracice managing state and lifecycle methods. 

## Overview

### Usage

User is able to:

- view items on the list, as fetched from the placeholder API 
- check items as completed


## My process

### Built with

- React (create-react-app) 
- ES6+ (async/await, fetch API)
- CSS3 
- Flexbox / Grid
- Placeholder API 

### What I learned

With this exercise I practiced using props and state. The most challenging ppart was figuring out how to <code>setState</code> after checking/unchecking items on the list. To accomplish that I used a handler function, which updated the state of <code>completed</code> property of the <code> todo </code> object.

```javascript
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

```
NOTE TO MYSELF: To get it to work properly, it is essential to create a new object every time we change a property - not to change the existing object (in fact, one should never change the object state direcly, just create a new object).

```javascript
if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
```


### Continued development

Adding the usual functionalitites like creating new items, updating and deleting, etc. 


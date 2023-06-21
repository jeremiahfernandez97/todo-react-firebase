import React from 'react'

// const todos = [1,12,123,1234]

function Todo({todos, handleClickCheckbox, handleClickDelete}) {
    return (
      <>
      <ul style={{"listStyleType":"none"}}>
        {todos.map( (todo, index) => <li key={index}> <input onChange={() => handleClickCheckbox(todo)} checked={todo.completed ? "checked" : ""} type="checkbox"/> {todo.text} <a onClick={() => handleClickDelete(todo.id)} href="" style={{"textDecoration":"none"}}>🗑</a></li> )}
      </ul>
      </>
    )
  }
  
export default Todo
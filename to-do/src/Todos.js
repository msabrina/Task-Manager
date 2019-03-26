import React from 'react';

const Todos = ({todos, deleteTodo}) => {

  const todoList = todos.length ? (
    todos.map(todo => {

      console.log(todo.id);
      return (
        <ul className="todo-item"  id={todo.id}>
          <li key={todo.id} id={todo.id}>{todo.content}</li>
          <span onClick={() => {deleteTodo(todo.id)}}>{todo.content}</span>
        </ul>
      )
    })
  ) : ( <p className="complete-message">Done! </p> );


    return (
      <div className="todo items">
        {todoList}
      </div>
    )
}

export default Todos;

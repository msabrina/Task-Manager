import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

const Todos = ({ todos, toggleTodo }) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => toggleTodo(todo.id)}


      />
    )}
  </ul>
)

Todos.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  toggleTodo: PropTypes.func.isRequired
}

// const Todos = ({todos, deleteTodo}) => {

//   const todoList = todos.length ? (
//     todos.map(todo => {

//       console.log(todo.id);
//       return (
//         <ul className="todo-item"  id={todo.id}>
//           <li key={todo.id} id={todo.id}>{todo.content}</li>
//           <span onClick={() => {deleteTodo(todo.id)}}>{todo.content}</span>
//         </ul>
//       )
//     })
//   ) : ( <p className="complete-message">Done! </p> );


//     return (
//       <div className="todo items">
//         {todoList}
//       </div>
//     )
// }

export default Todos

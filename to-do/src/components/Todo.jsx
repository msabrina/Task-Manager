import React from 'react';
import PropTypes from 'prop-types'

const Todo = ({ id, onClick, handleClick, completed, text, content }) =>  (

  // toggleContent = () => {
  //   this.state = {active: false};
  //   this.setState((contentState) => {
  //     active: !contentState.active
  //   });
  // }


    // <div className="task-card"  onClick={() => handleClick(id)}>
      <li  id={id} style={{ textDecoration: completed ? 'line-through' : 'none'}}> {text}
        <span> {content}</span>
        <span > - </span>

      </li>
    // </div>
)
  //use propTypes to validate data received

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  removeClick: PropTypes.func.isRequired
}


export default Todo;

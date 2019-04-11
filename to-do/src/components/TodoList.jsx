import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import Todo from './TodoItem';


class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }


  componentDidMount() {
    this.getAllTask();
  }

  getAllTask() {

    axios.get('http://localhost:4000/todos/')
      .then(response => {
        this.setState({ todos: response.data});
        console.log(response.data);
      })
      .catch(function (error){
        console.log(error);
      })
  }

//Map through list of todos(data)

  todoList() {
    // console.log(this.state.todo);
    return this.state.todos.map(function(task, i){
     return <Todo todo={task} key{...i}  />;
    });
  }


  render() {
    return(
      <div className="task-list">
        <h2>Task List</h2>
        <table className="task-body">
          <thead>
            <tr className="task-heading">
              <th>Title</th>
              <th>Description</th>
               <th>Priority</th>
            </tr>
          </thead>
          <tbody>
          { this.todoList() }
          </tbody>
        </table>
      </div>
    );
  }
}

export default TodoList;

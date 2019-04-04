import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import TodoItem from './TodoItem';

const Todo = props => (
  <tr>
    <td>{props.todo.task_title}</td>
    <td>{props.todo.task_content}</td>
    <td>{props.todo.task_priority}</td>
    <td><Link to={"/edit/"+props.todo._id}>Edit</Link></td>
  </tr>
)

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }


//GET data from api to render on front-end
  componentDidMount() {

    console.log('this is mounting')
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
    console.log(this.state.todo);
    return this.state.todos.map(function(task, i){
     return <Todo todo={task} key{...i}  />;
    });
  }

  render() {
    return(
      <div>
        <h2>Task Manager</h2>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
               <th>Priority</th>
              <th>Status</th>
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

import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Todo extends Component {
  constructor(props) {
    super(props);
    // bind delete function to constructor
    this.handleDelete = this.handleDelete.bind(this)

      this.state = {
      id: '',
      task_title: '',
      task_content: '',
      task_priority: '',
      task_completed: false
    }
  }

  componentDidMount() {
    this.getTask();
  }

  getTask() {

    axios.get('http://localhost:4000/todos/')
      .then(response => {
        this.setState({ todos: response.data});
        // console.log(response.data)
      })
      .catch(function(error){
        console.log(error)
      })
  }


  handleDelete(id) {

      // console.log(this.props.todo._id)
    axios.post('http://localhost:4000/todos/delete/'+ this.props.todo._id)
        console.log(this.props.todo._id)

      let taskList = [this.props.todo];
      let newTaskList = taskList;
      // console.log(newTaskList)
      for (let i = 0; i < newTaskList.length; i++) {
        let todos = newTaskList[i]
        console.log(todos)
        if (todos.id === id) {
          newTaskList.splice(i, 1)
          break
        }
      }
      this.setState({todos: newTaskList})
      console.log('Deleted! -Refresh page')

  }

    render() {
      return (
        <tr className={this.props.todo.task_completed ? 'completed': ''}>

          <td>{this.props.todo.task_title}</td>
          <td>{this.props.todo.task_content}</td>
          <td>{this.props.todo.task_priority}</td>
          <td>{this.props.todo.task_completed}</td>
          <td><Link to={"/edit/"+this.props.todo._id}>Edit</Link></td>
          <td><button type="submit" onClick={this.handleDelete}>Delete Todo</button></td>
        </tr>
      );
    }
}

export default Todo;

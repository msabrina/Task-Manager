import React, { Component } from 'react';
import axios from 'axios';
import TodoItem from './TodoItem';

class Home extends Component   {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }


//GET data from api to render on front-end
  componentDidMount() {
    axios.get('http://localhost:4000/testDB')
      .then(response => {
        this.setState({ todo: response.data});
        console.log(this.state);
      })
      .catch(function (error){
        console.log(error);
      })
  }


//Map through list of todos(data)
  todoList() {
    return this.state.todos.map(function(item, i){
     return <TodoItem item={item} key{...i}  />;
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
              <th>Content</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {this.todoList()}
            <TodoItem />
          </tbody>
        </table>
      </div>
    );
  }
}

export default Home;

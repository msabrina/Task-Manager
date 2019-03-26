import React, { Component } from 'react';
import './App.css';
import Todos from './Todos';
import AddTodo from './AddTodo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
                apiResponse: '',
                dbResponse: '',

                todos: [
                  { id: 1,
                    content: 'buy some milk',
                    day: '',
                  },
                  {id: 2, content: 'play mario kart'}
                ]
    };
  }

  callAPI() {
    fetch("http://localhost:9000/routeAPI")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
  }

  callDB() {
    fetch("http://localhost:9000/testDB")
        .then(res => res.text())
        .then(res => this.setState({ dbResponse: res }))
        .catch(err => err);
  }

  componentDidMount() {
    this.callAPI();
    this.callDB();
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos
    });
  }

  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    })
  }




  render() {
    return (
      <div className="App">
        <header className="">
        </header>
          <p className="App-intro">{this.state.apiResponse}</p>
          <p className="App-intro">{this.state.dbResponse}</p>

          <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
          <AddTodo addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;

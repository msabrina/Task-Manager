import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../App.css';
import TodoList from './TodoList';
import CreateTask from './CreateTask';
import EditTask from './EditTask';
// import DeleteTask from './DeleteTask';

class App extends Component {


  render() {
    return (
      <Router>
        <div className="Container">
          <nav className="navbar">
            <Link to={'/'} className="nav-link">Sabrina's Task Manager</Link>
            <div className="collapse navbar-collapse" >

            </div>
          </nav>
          <div className="container-main">
            <CreateTask />
            <Route path='/' exact component={ TodoList } />
            <Route  path='/create'  component={ CreateTask } />
            <Route path='/edit/:id' component={ EditTask } />
          </div>
      </div>
      </Router>
    );
  }
}

export default App;

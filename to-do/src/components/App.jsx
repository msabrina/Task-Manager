import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import './App.css';
import TodoList from './TodoList';
import CreateTask from './CreateTask';
import EditTask from './EditTask';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
                apiResponse: '',
                dbResponse: '',
                todos: []
    };
  }






  render() {
    return (
      <Router>
        <div className="Container">

          <nav className="navbar">
            <Link to={'/'} className="nav-link">Sabrina's TodoList</Link>
            <div className="collapse navbar-collapse" >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to={'/'} className="nav-link">TodoList</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/create'} className="nav-link">Create</Link>
                </li>
              </ul>
            </div>
          </nav>
            <Route path='/' exact component={ TodoList } />
            <Route  path='/create'  component={ CreateTask } />
            <Route path='/edit/:id' component={ EditTask } />




      </div>
      </Router>
    );
  }
}

export default App;

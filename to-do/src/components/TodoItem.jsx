import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// const Task = props => {}


class TodoItem extends Component {
  constructor(props) {
    super(props);
    // bind delete func to constructor
    this.delete = this.delete.bind(this)
    // this.state = {
    //   title: '',
    //   content: ''
    // }

  }

  delete() {
    axios.get('http://localhost:4000/testDB/delete'+this.props.obj._id)
      .then(console.log('delete'))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <tr>
        <td>
          {this.props.title}
        </td>
        <td>
          {this.props.content}
        </td>
        <td>
        </td>
        <td>
          <button onClick={this.delete}>Delete</button>
        </td>
      </tr>
    );
  }
}

export default TodoItem;
         // <Link to={"/edit/"+this.props.obj._id} className="btn btn-primary">Edit</Link>

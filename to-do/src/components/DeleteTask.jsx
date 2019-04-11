import React, { Component } from 'react';
import axios from 'axios';

class DeleteTask extends Component {
  constructor() {
    super();
    this.state={
      todos: [],
    };
    this.onClick = this.onClick.bind(this);
    this.onDeleteChange = this.onDeleteChange.bind(this);

  }

  componentDidMount() {
    this.setState({
      // todos
    })
  }

  onClick(e){
    this.onDeleteChange(this);
  }

  onDeleteChange(e) {
    axios.get('http://localhost:4000/todos/delete'+ this.props.match.params.id)
    .then(console.log('Deleted'))
    .catch(err => console.log(err))
  }

  render() {
    return (
      <button  onClick={this.onClick}></button>
    )
  }
}

export default DeleteTask;

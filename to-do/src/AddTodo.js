import React, { Component } from 'react';


class AddTodo extends Component {
  state = {
    content: ''
  }

  handleChange = (e) => {
    this.setState({
      content: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
      content: ''
    });
  }

  render(){
    return (
      <div>
        <form >
          <label>Add todo: </label>
          <input type="text" onChange={this.handleChange} value={this.state.content}/>
          <button onSubmit={this.handleSubmit} > Add </button>
        </form>
      </div>
    )
  }
}

export default AddTodo;

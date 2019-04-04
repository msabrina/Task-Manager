import React, { Component } from 'react';
import axios from 'axios';

class CreateTask extends Component {
  constructor(props) {

    super(props);
    // Set initial state of component
    this.state = {
      task_title: '',
      task_content: '',
      task_priority: '',
      task_completed: false
    }
    // bind state object methods to 'this' so we can call them during render
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onContentChange = this.onContentChange.bind(this);
    this.onPriorityChange = this.onPriorityChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onTitleChange(e) {
    this.setState({
      task_title: e.target.value
    });
  }

  onContentChange(e) {
    this.setState({
      task_content: e.target.value
    });
  }

  onPriorityChange(e) {
    this.setState({
      task_priority: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    console.log(`the values are ${this.state.task_title}, ${this.state.task_content}`)

    const newTask = {
      task_title: this.state.task_title,
      task_content: this.state.task_content,
      task_priority: this.state.task_priority,
      task_completed: this.state.task_completed
    };

    axios.post('http://localhost:9000/todos/add', newTask)
      .then(res => console.log(res.data));

    // Reset form by resetting the state object
    this.setState({
      task_title: '',
      task_content: '',
      task_priority: '',
      task_completed: false
    })
  }

  render() {
    return (
      <div className="create-task">
        <form onSubmit={this.onSubmit}>
          <div className="Form">
            <label>Task Title:</label>
              <input type="text" value={this.state.task_title} onChange={this.onTitleChange}/>
          </div>
          <div className="form">
            <label>Task Description:</label>
            <input type="textarea" value={this.state.task_content} onChange={this.onContentChange}/>
          </div>
          <div className="form-check" >
            <div className="form">
              <label>Priority</label>
              <input type="radio" name="options" className="priority" id="priorityLow" value="Low" checked={this.state.task_priority==='Low'} onChange={this.onPriorityChange}/>
              <label>low</label>
            </div>
            <div className="form">
              <input type="radio" name="options" className="priority" id="priorityHigh" value="High" checked={this.state.task_priority==='High'} onChange={this.onPriorityChange}/>
              <label>High</label>
            </div>

          </div>
          <div className="form">
              <input type="submit" value="Create Task" className="btn"/>
          </div>
        </form>
      </div>
    )
  }
}

export default CreateTask;

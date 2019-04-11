import React, { Component } from 'react';
import axios from 'axios';

class EditTask extends Component {
  constructor(props) {
    super(props);

    // bind functions
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onContentChange = this.onContentChange.bind(this);
    this.onTaskCompletedChange = this.onTaskCompletedChange.bind(this);
    this.onPriorityChange = this.onPriorityChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      task_title: '',
      task_content: '',
      task_priority: '',
      task_completed: false
    }
  }

  componentDidMount() {
  // get a task to edit
  // console.log(this.props.match.params.id)
    axios.get('http://localhost:4000/todos/'+this.props.match.params.id)
      .then(response => {

        // After response is received, reset the component's state values from the todo item received.
        this.setState({
          task_title: response.data.task_title,
          task_content: response.data.task_content,
          task_priority: response.data.task_priority,
          task_completed: response.data.task_completed
        });
      })
      .catch(function (error) {
          console.log(error);
      });
  }


  onTitleChange(e) {
    this.setState({
      task_title: e.target.value
    });
  }

  onContentChange(e) {
    this.setState({
      task_content: e.target.value
    })
  }

  onPriorityChange(e) {
    this.setState({
      task_priority: e.target.value
    });
  }


  onSubmit(e) {
    e.preventDefault();

    // store new state
    const updatedTask = {
      task_title: this.state.task_title,
      task_content: this.state.task_content,
      task_priority: this.state.task_priority,
      task_completed: this.state.task_completed
    };

    axios.post('http://localhost:4000/todos/update/'+this.props.match.params.id, updatedTask)
        .then(res => console.log(res.data));
    //
    this.props.history.push('/');
  }

  onTaskCompletedChange(e) {
    this.setState({
      task_completed: !this.state.task_completed
    })

  }

  render() {
    return (
      <div className="edit-task">
        <h3 align="center">Update Task </h3>
        <form onSubmit={this.onSubmit}>

          <div className="form-input">
            <label>Task Title:</label>
              <input type="text" value={this.state.task_title} onChange={this.onTitleChange}/>
          </div>
          <div className="form-input">
            <label>Task Description:</label>
            <input type="textarea" value={this.state.task_content} onChange={this.onContentChange}/>
          </div>

          <div className="priority-check" >
            <div className="form">
              <label>Priority</label>
              <input
                type="radio"
                name="options"
                value="Low"
                checked={this.state.task_priority==='Low'}
                onChange={this.onPriorityChange}
              />
              <label>low</label>
              <input
                type="radio"
                name="options"
                value="High"
                checked={this.state.task_priority==='High'}
                onChange={this.onPriorityChange}
              />
              <label>High</label>
            </div>
          </div>

          <div className="form-complete">
            <input
              type="checkbox"
              className="completed"
              value={this.state.task_completed}
              checked={this.state.task_completed}
              onChange={this.onTaskCompletedChange}/>
            <label htmlFor="completedCheckbox">Completed</label>
          </div>
          <div className="form">
            <input type="submit" value="Update Task" className="btn"/>
          </div>
        </form>
      </div>
    )
  }
}

export default EditTask;

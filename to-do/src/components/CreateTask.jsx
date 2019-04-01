import React, { Component } from 'react';
import axios from 'axios';

class CreateTask extends Component {
  constructor(props) {
    super(props);
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onContentChange = this.onContentChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      id:'',
      title: '',
      content: ''
    }
  }

  onTitleChange(e) {
    this.setState({
      title: e.target.value
    });
  }

  onContentChange(e) {
    this.setState({
      content: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const item = {
      title: this.state.title,
      content: this.state.content
    };


    axios.post('http://localhost:4000/testDB/add', item)
      .then(res => console.log(res.data));

    this.setState({
      id: '',
      title: '',
      content: ''
    })
  }

  render() {
    return (
      <div className="create-task">
        <form onSubmit={this.onSubmit}>
          <label>Task Title</label>
          <input type="text" value={this.state.title} onChange={this.onTitleChange}/>
          <label >Description</label>
          <input type="textarea" value={this.state.content} onChange={this.onContentChange}/>
          <label>Submit task</label>
          <input type="submit" value="submit" className="btn primary" onSubmit={this.onSubmit}/>


        </form>
      </div>
    )
  }
}

export default CreateTask;

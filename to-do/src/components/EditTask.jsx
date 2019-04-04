import React, { Component } from 'react';
import axios from 'axios';

class EditTask extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeContent = this.onChangeContent.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      title: '',
      content: ''
    }
  }

  componentDidMount() {
      axios.get('http://localhost:4000/business/edit/'+this.props.match.params.id)
          .then(response => {
              this.setState({
                title: response.data.title,
                content: response.data.content });
          })
          .catch(function (error) {
              console.log(error);
          })
    }

  onChangePersonName(e) {
    this.setState({
      title: e.target.value
    });
  }
  onChangeBusinessName(e) {
    this.setState({
      content: e.target.value
    })
  }


  onSubmit(e) {
    e.preventDefault();
    const obj = {
      title: this.state.title,
      content: this.state.content,
    };
    axios.post('http://localhost:4000/testDB/update/'+this.props.match.params.id, obj)
        .then(res => console.log(res.data));

    this.props.history.push('/index');
  }

  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3 align="center"></h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Tile:  </label>
                    <input
                      type="text"
                      className="form-control"
                      value={this.state.title}
                      onChange={this.onChangeTitle}
                      />
                </div>
                <div className="form-group">
                    <label>Business Name: </label>
                    <input type="text"
                      className="form-control"
                      value={this.state.content}
                      onChange={this.onChangeContent}
                      />
                </div>

                <div className="form-group">
                    <input type="submit"
                      value="Update Business"
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}

export default EditTask;

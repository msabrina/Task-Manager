import React, { Component } from 'react';

class TodoItem extends Component {
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
          <button>Edit</button>
        </td>
        <td>
          <button>Delete</button>
        </td>
      </tr>
    );
  }
}

export default TodoItem;

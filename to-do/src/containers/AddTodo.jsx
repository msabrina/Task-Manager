import React from 'react';

//connect function connects React component to Redux store
import { connect } from 'react-redux';

//import addTodo action action
import { addTodo } from '../actions';

//dispatch AddTodo action to trigger state change to the store
//send as props
const AddTodo = ({ dispatch, state }) => {

  let input, team; //input variable which will reference input element

  // handleChange = (e) => {
  //   this.setState({
  //     content: e.target.value
  //   });
  // }

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   this.props.addTodo(this.state);
  //   this.setState({
  //     content: ''
  //   });
  // }

  const assignTask = (e) => {
    e.preventDefault()

      if (!input.value.trim())
        return

        dispatch(addTodo({text: input.value,
                         assign: team.value.trim() ? team.value : 'All'
                       }));
        input.value =''

      }


    return (
      <div>
        <form onSubmit={assignTask}
        >
          <input type="text"
             ref={node => {
              input=node //assing the node ref to input variable. (handleChange())
             }}
          />
          <select name="favoriteColor" component="select" type="text"
             ref={node => {
              input=node //assing the node ref to input variable. (handleChange())
             }}>
            <option></option>
            <option value="#ff0000">Red</option>
            <option value="#00ff00">Green</option>
            <option value="#0000ff">Blue</option>
          </select>

          <button type="submit" > Add todo </button>
        </form>
      </div>
    )
  }


export default connect()(AddTodo);

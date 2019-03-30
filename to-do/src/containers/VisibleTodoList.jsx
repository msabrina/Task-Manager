import { connect } from 'react-redux';
import { toggleTodo } from '../actions'
import Todos from '../components/Todos';
import { FilterStatus } from '../actions';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case FilterStatus.SHOW_ALL:
      return todos
    case FilterStatus.SHOW_COMPLETED:
    //filter out the items where t is completed
      return todos.filter(t => t.completed)
    case FilterStatus.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

  //get new state from reducer
const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

//fire dispatch to pass props to component
const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos)

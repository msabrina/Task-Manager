const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          content: action.content,
          completed: false
        }
      ];
    // case 'DELETE_TASK':
    //   return state.filter(t =>
    //     todo(t, action)

    //   );
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          :todo
      )
    default:
      return state
  }
}

export default todos;

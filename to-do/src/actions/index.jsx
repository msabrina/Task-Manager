//Action creators. Send payload to the store

let addToList = 0

export const addTodo = text => ({
  type: 'ADD_TODO',
  id: addToList++, //adds id to next todo
  text
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER', //is it active or completed
  filter
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const FilterStatus =  {
  SHOW_ALL: 'SHOW_ALl',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
const defaultState = [
    {
      id: 0,
      task: 'Test this Todo Page',
      completed: false
    },
    {
      id: 1,
      task: 'Learn Redux',
      completed: false
    },
    {
      id: 2,
      task: 'Learn React',
      completed: true
    }
  ]
  
  function todos (state = defaultState, action) {
    switch (action.type) {
        case 'ADD_TODO':
        return [...state, action.todo]
        
        case 'TOGGLE_TODO':
        return state.map(todo=>{
            if (todo.id === action.id) {
                todo.completed != todo.completed
            }
            return todo
        })
        
        case 'DELETE_ALL_TODOS':
        return []

      default:
        return state
    }
  }
  
  export default todos
const todos = (state = [], action) => {
    switch (action.type) {
      case 'LOAD_TODO_SUCCESS':
      return action.todos.map((item)=>{
        item.sent = true;
        return item
      })
  
      case 'POST_TODO':
      return [
        ...state,
        {
          id: action.id,
          task: action.task,
          sent: true
        }
      ]
  
      case 'POST_TODO_SUCCESS':
      return action.todos.map((item)=>{
        item.sent = true;
        return item
      })
  
      case 'POST_TODO_FAILURE':
      return state.map((item)=>{
        if(item.id === action.id){
          item.sent = false;
        }
        return item
      })

      case 'RESEND_TODO_SUCCESS':
      return state.map((item)=>{
        if(item.id === action.id){
          item.sent = true;
        }
        return item
      })
  
      case 'LOAD_TODO_FAILURE':
      default:
      return state
    }
  }
  
  export default todos
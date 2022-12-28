const todos = (state =[],action) => {

    switch(action.type) {

        case 'ADD_TODOS':
            return[
                ...state,
                {
                    id:action.id,
                    text:action.text,
                    completed:false
                }
            ]

        case 'TOGGLE_TODO':
            return state.map(todos => (todos.id == action.id) ? {...todos, completed:!todo.completed} :todo)

        default:
            return state
    }

}

export default todos
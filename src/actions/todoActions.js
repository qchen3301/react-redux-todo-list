import uuid from 'uuid' //universinally unique identifiers

export function addTodo(task) {
    return {
        type: 'ADD_TODO',
        todo: {
            id: uuid(),
            task,
            completed: false
        }
        
    }
}

export const toggleTodo = (id) => {
    return {
        type: "TOGGLE_TODO",
        todo: {
            id: uuid(),
            task,
            completed:true
        }
    }
}
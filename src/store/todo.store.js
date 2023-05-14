import {Todo} from '../todo/models/todo.models'

const Filters = {
    All: 'all',
    Completed: 'completed',
    Pending: 'pending'
}

const state = {
    todos: [
        new Todo('Piedra del alma'),
        new Todo('Piedra del tiempo'),
        new Todo('Piedra del Infinito')
    ],
    filter: Filters.All,
    
}

const initStore = () => {
    console.log(state);
    console.log( 'Store init 🥑' );
}

export default {
    initStore
}
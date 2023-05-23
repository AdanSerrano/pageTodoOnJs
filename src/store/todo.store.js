import { Todo } from '../todo/models/todo.models'

const Filters = {
    All: 'all',
    Completed: 'completed',
    Pending: 'pending'
}

const state = {
    todos: [
        new Todo('Piedra del alma'),
        new Todo('Piedra del tiempo'),
        new Todo('Piedra del Infinito'),
        new Todo('Piedra del realidad')
    ],
    filter: Filters.All,
}

const initStore = () => {
    console.log(state);
    console.log('Store init 🥑');
}

const loadStore = () => {
    throw new Error('Not implemented');
}

const getTodos = (filter = Filters.All) => {
    switch (filter) {
        case Filters.All:
            return [...state.todos];
        case Filters.Completed:
            return state.todos.filter(todo => todo.done)
        case Filters.Pending:
            return state.todos.filter(todo => !todo.done)
        default:
            throw new Error('Option ${filter} is no valids')
    }
}

const addTodo = (description) => {
    if (!description) {
        throw new Error('Description is required')
    }
    state.todos.push(new Todo(description))
}

const toggleTodo = (todoId) => {
    state.todos = state.todos.map(todo => {
        if (todo.id === todoId) {
            todo.done = !todo.done;
        }
        return todo;
    });

}

const deleteTodo = (todoId) => {
    state.todos = state.todos.filter(todo => todo.id !== todoId)
}

const deleteCompleted = () => {
    state.todos = state.todos.filter(todo => todo.done)
}

const setFilter = (newFilter = Filers.All) => {
    state.filter = newFilter;
}

const getCurrentFilter = () => {
    return state.filter;
}


export default {
    initStore,
    loadStore,
    getTodos,
    addTodo,
    deleteTodo,
    deleteCompleted,
    setFilter,
    getCurrentFilter,
    toggleTodo
}
import todoStore from '../store/todo.store';
import html from './app.html?raw';
import { renderTodos } from './use-cases';



const elementIDs = {
    TodoList: '.todo-list',
    NewTodoImput: '.new-todo',

}
export const App = (elementId) => {


    const displayTodos = () => {
        const todos = todoStore.getTodos(todoStore.getCurrentFilter());
        renderTodos(elementIDs.TodoList, todos)
    }

    // CUANDO LA FUNCION SE LLAMA 
    (() => {
        const app = document.createElement('section');
        app.innerHTML = html;
        document.querySelector(elementId).append(app);
        displayTodos();
    })();

    //referencias html 
    const newDescriptionImput = document.querySelector(elementIDs.NewTodoImput);
    const todoListUL = document.querySelector(elementIDs.TodoList);



    //listeners 
    newDescriptionImput.addEventListener('keyup', (event) => {
        if (event.keyCode !== 13) return;
        if (event.target.value.trim().length === 0) return;
        todoStore.addTodo(event.target.value)
        displayTodos();
        event.target.value = '';
    });

    todoListUL.addEventListener('click', (event) => {
        const element = event.target.closest('[data-id]')
        todoStore.toggleTodo(element.getAttribute('data-id'));
        displayTodos();
    });
}
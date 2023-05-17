
export const createTodoHtml = (todo) => {
    if(!todo) {
        throw new Error('Invalid todo');
    }

    const html = `<h1> ${todo.description} </h1>`;
    const liElement = document.createElement('li')
    liElement.innerHTML = html;

    return liElement;
}
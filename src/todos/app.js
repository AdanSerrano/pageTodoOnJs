export const App = (elementId) => {


    // CUANDO LA FUNCION SE LLAMA 
    (() => {
        const app = document.createElement('div');
        app.innerHTML = `<h1>Hola mundo</h1>`;
        document.querySelector(elementId).appendChild(app);
    })();
};
import html from './app.html?raw';
export const App = (elementId) => {


    // CUANDO LA FUNCION SE LLAMA 
    (() => {
        const app = document.createElement('div');
        app.innerHTML = `${html}`;
        document.querySelector(elementId).appendChild(app);
    })();
};
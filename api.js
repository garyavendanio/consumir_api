// Metodo fetch javascript.
const API_URL = 'https://jsonplaceholder.typicode.com';

// Modo 3:

const HTMLResponse = document.querySelector('app');
const ul = document.createDocumentFragment();

fetch(`${API_URL}/users`).then((response) => response.json()).then((users) => {
    users.forEach(user => {
        let elem = document.createElement('li');
        elem.appendChild(document.createTextNode(`${user.name} ✉️ ${user.email}`));
        ul.appendChild(elem);
    });
    //HTMLResponse.appendChild(ul);
    app.appendChild(ul);
});

// Modo 2:

/*
const HTMLResponse = document.querySelector('app');
const tpl = document.createDocumentFragment();

fetch(`${API_URL}/users`).then((response) => response.json()).then((users) => {
    //const tpl = users.map(user => `<li>${user.name} ✉️ ${user.email}</li>`);
    //HTMLResponse.innerHTML = `<ul>${tpl}</ul>`;
});
*/

// Modo 1:

/*
const xhr = new XMLHttpRequest();

function onRequestHandler() {
    if(this.readyState === 4 && this.status === 200) {
    // 0 = UNSET: No se ha llamado al metodo open.
    // 1 = OPENED: Se ha llamado al metodo open.
    // 2 = HEADERS_RECEIVED: Está llamando al metodo send()
    // 3 = LOADING: Está cargando, recibiendo un mensaje.
    // 4 = DONE: Se ha completado la operación.
        //console.log(this.response);
        const data = JSON.parse(this.response);
        //console.log(data);
        //const HTMLResponse = document.querySelector('app');

        const tpl = data.map((user) => `<li>${user.name} ✉️ ${user.email}</li>`);
        HTMLResponse.innerHTML = `<ul>${tpl}</ul>`;
    }
}

xhr.addEventListener('load', onRequestHandler);
xhr.open('GET', `${API_URL}/users`);
xhr.send()
*/
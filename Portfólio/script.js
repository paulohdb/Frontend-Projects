function typeWriter(elemento) {

    const textArray = elemento.innerHTML.split('');

    elemento.innerHTML = '';
    textArray.forEach((letra, i) => {
        setTimeout(() => 
            elemento.innerHTML += letra, 75 * i);
    });
}

const title = document.querySelector('h1');

typeWriter(title);
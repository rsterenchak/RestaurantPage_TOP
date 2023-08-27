import './style.css';

console.log("Ready to rock");

function component() {
    const element = document.createElement('div');

    element.classList.add('outerContainer');

    return element;

}


let outerCon = document.body.appendChild(component());

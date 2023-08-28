import './style.css';
import Image from './restaurant.jpg';

console.log("Ready to rock");

function component() {
    const element = document.createElement('div');
    const element1 = document.createElement('div');
    const text1 = document.createElement('div');
    const element2 = document.createElement('div');

    element.id ='outerContainer';
    element1.id = 'navBar';
    element2.id = 'mainSec';

    text1.id = 'heading';
    text1.textContent = "My Restaurant Page";


    element.appendChild(element1);
    element.appendChild(element2);

    element1.appendChild(text1);


    return element;

}


document.body.appendChild(component());

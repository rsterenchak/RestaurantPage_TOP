import './style.css';
import Image from './restaurant.jpg';

console.log(Image);
console.log("Ready to rock");

export default function component() {
    const element = document.createElement('div');
    const element1 = document.createElement('div');
    const text1 = document.createElement('div');
    const element2 = document.createElement('div');

    element.id ='outerContainer';
    element1.id = 'navBar';
    element2.id = 'mainSec';

    

    text1.id = 'heading';
    text1.textContent = "My Restaurant Page";

    // Add the image to our existing div.
    element.appendChild(element1);
    element.appendChild(element2);

    element1.appendChild(text1);

    // element.style.backgroundImage = `url("${Image}")`;
    

    return element;

}



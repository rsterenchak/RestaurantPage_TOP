import './style.css';
import Image from './restaurant.jpg';



export default function component() {

    console.log("Opened Main page");

    const element = document.createElement('div');
    const element1 = document.createElement('div');
    const text1 = document.createElement('div');
    const element2 = document.createElement('div');

    const sec1 = document.createElement('div');
    const sec2 = document.createElement('div');    

    const secHeader = document.createElement('div');

    const text2 = document.createElement('div');

    const navSec = document.createElement('div');

    const space1 = document.createElement('div');
    const tab1 = document.createElement('div');
    const tab2 = document.createElement('div');
    const tab3 = document.createElement('div');
    const space2 = document.createElement('div');


    element.id ='outerContainer';
    element1.id = 'navBar';
    element2.id = 'mainSec';

    sec1.id = 'headSec';
    sec2.id = 'bodySec';

    secHeader.id = 'secHead';
    secHeader.textContent = "Home";
    
    text1.id = 'heading';
    text1.textContent = "Restaurant Page";

    navSec.id = 'navHead';

    text2.id = 'bodyHeader';
    text2.textContent = "Main";


    space1.id = 'spacer1';
    tab1.id = 'tab1';
    tab2.id = 'tab2';
    tab3.id = 'tab3';
    space2.id = 'spacer2';


    // Add the image to our existing div.
    element.appendChild(element1);
    element.appendChild(element2);

    element1.appendChild(text1);
  
    element2.appendChild(sec1);    
    element2.appendChild(sec2);

    sec1.appendChild(navSec);

    sec2.appendChild(secHeader);

    navSec.appendChild(space1);
    navSec.appendChild(tab1);
    navSec.appendChild(tab2);
    navSec.appendChild(tab3);
    navSec.appendChild(space2);

    space1.textContent = "";
    tab1.textContent = "Home";
    tab2.textContent = "Menu";
    tab3.textContent = "Contact";
    space2.textContent = "";

    


    return element;

};



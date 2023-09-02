import './style.css';
import Image from './restaurant.jpg';


export default function menuComponent() {

    console.log("Opened Menu page");

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

    const text3 = document.createElement('div');
    const text4 = document.createElement('div');
    const text5 = document.createElement('div');

    const tabSpacer1 = document.createElement('div');
    const tabSpacer2 = document.createElement('div');

    const tabSpacer3 = document.createElement('div');
    const tabSpacer4 = document.createElement('div');

    const tabSpacer5 = document.createElement('div');
    const tabSpacer6 = document.createElement('div');


    element.id ='outerContainer';
    element1.id = 'navBar';
    element2.id = 'mainSec';

    sec1.id = 'headSec';
    sec2.id = 'bodySec';

    secHeader.id = 'secHead';
    secHeader.textContent = "Menu";
    
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
    
    tabSpacer1.id = 'tabSpace';
    tabSpacer2.id = 'tabSpace';
    
    tab1.appendChild(tabSpacer2);
    tab1.appendChild(text3);
    tab1.appendChild(tabSpacer1);

    text3.textContent = "Home";
    text3.id = 'tabText1';

    tabSpacer3.id = 'tabSpace2';
    tabSpacer4.id = 'tabSpace2';

    tab2.appendChild(tabSpacer4);
    tab2.appendChild(text4);
    tab2.appendChild(tabSpacer3);

    text4.textContent = "Menu";
    text4.id = 'tabText2';


    tabSpacer5.id = 'tabSpace3';
    tabSpacer6.id = 'tabSpace3';
    
    tab3.appendChild(tabSpacer6);
    tab3.appendChild(text5);
    tab3.appendChild(tabSpacer5);

    text5.textContent = "Contact";
    text5.id = 'tabText3';

    


    return element;
};

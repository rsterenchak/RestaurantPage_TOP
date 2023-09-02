import component from "./main.js";
import menuComponent from "./menu.js";
import contactComponent from "./contact.js";



var initialPage = () => {
console.log("START");

let bodyElement = document.body;
let page = bodyElement.firstElementChild;

const tabElement1 = document.getElementById("tab1"); // may need to be called again 
const tabElement2 = document.getElementById("tab2"); 
const tabElement3 = document.getElementById("tab3"); 

// put 'click' event listener for main page
tabElement1.addEventListener("click", function() {
    page = bodyElement.lastElementChild;
    
    bodyElement.removeChild(page);
    bodyElement.appendChild(component());

    initialPage();

});

// put 'click' event listener for menu page
tabElement2.addEventListener("click", function() {
    page = bodyElement.lastElementChild;
    
    bodyElement.removeChild(page);
    bodyElement.appendChild(menuComponent());

    initialPage();
});


// put 'click' event listener for contact page
tabElement3.addEventListener("click", function() {
    page = bodyElement.lastElementChild;
    
    bodyElement.removeChild(page);
    bodyElement.appendChild(contactComponent());

    initialPage();  
});



}; // Ends initialPage



document.body.appendChild(component());
initialPage();
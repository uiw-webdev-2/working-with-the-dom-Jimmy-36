/**
 * Traverse the DOM tree using querySelector() and querySelectorAll()
 * @link https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector
 * @link https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelectorAll
 */

import Phone from "./Phone.js";

const everydayPhone = new Phone(
  "Black",
  "iphone i6",
  8,
  "Jim's iphone",
  false,
  "phone.jpg"
);

const content = `
     <figure class="backpack__image">
       <img src=${everydayPhone.image} alt="picture of iphone" />
     </figure>
     <h1 class="backpack__name${everydayPhone.model}"></h1>
     <ul class="backpack__features">
     </ul>
      <li>Color: ${everydayPhone.color}</li>
      <li>iPhone Model:  ${everydayPhone.model}</li>
      <li>Battery Life: ${everydayPhone.batteryLife}</li>
      <li>Name: ${everydayPhone.name}</li>
      <li>Phone off or on?: ${everydayPhone.phoneOn}</li>
   </article>
 `;

 //this is the part where you work with the DOM
const main = document.querySelector(".maincontent");


const newArticle = document.createElement('article');
newArticle.classList.add('backpack');
newArticle.setAttribute('id','everyday');
newArticle.innerHTML = content;

main.append(newArticle);

//main.innerHTML = content;



// const listItem = document.querySelector("ul li:first-child");

// listItem.classList.toggle("webdev");

// const backpackTitle = document.querySelector('h1').className;
// document.querySelector('img').setAttribute('alt', backpackTitle);

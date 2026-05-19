import { setTimeout } from "core-js";
import {container} from "./dom"
import startGame from './createGame';


export default async function (character) {

    container.innerHTML = "";
    container.classList.remove('entry');
    container.classList.add('loading-screen')
    const p = document.createElement('p');
    p.classList.add('loading-phrase')
    container.appendChild(p);
    return await typeLetter(p, character.phrase, character);

 
}


 async function typeLetter(element, text, character) {
   await sleep(1000);

    let delay = 0; 
    
    for (let letter of text) {
        setTimeout( async() => {
        element.textContent += letter; 
        if(element.textContent.length === text.length && element.textContent === text){
            await sleep(3000);
            return startGame(character);
        } 
    
      }, delay); 
      delay += 200; 
      
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
  
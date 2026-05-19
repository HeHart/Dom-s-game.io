import { container } from "./dom"
import startGame from './Game';

class Character {
    constructor(obj) {
        this.name = obj.name;
        this.middleName = obj.middleName || "";
        this.lastName = obj.lastName || "";
    }
    completeName() {
        let completeName = this.name + " "
        if (this.middleName) completeName += this.middleName + " "
        if (this.lastName) completeName += this.lastName
        return completeName;
    }
}
export default function (object) {
    container.classList.remove("entry");
    container.classList.add("fork-game");
    container.classList.remove("hidden");
    const character = new Character(object);
    const NameToArray = [Array.from(character.name), Array.from(character.middleName) || undefined, Array.from(character.lastName) || undefined];
    container.innerHTML = '';

    //guess form
    const guessForm = createLetter(NameToArray);

    //guess letter form 
    const inputToGuessLetter = createElement('input', 'guess-letter');
    inputToGuessLetter.setAttribute('maxlength', '1');
    const formToGuessLetter = createElement('form', 'guess-letter-form');
    const buttonToGuessLetter = createElement('button', 'guess-letter-button');
    buttonToGuessLetter.setAttribute('type', 'submit');
    buttonToGuessLetter.innerHTML = 'Guess';
    formToGuessLetter.appendChild(inputToGuessLetter);
    formToGuessLetter.appendChild(buttonToGuessLetter);

    // wrong letters container 
    const wrongLettersContainer = createElement('div', 'wrong-letters-container');
    const wrongLetters = createElement('p', 'errors');
    wrongLettersContainer.appendChild(wrongLetters);


    // life container 
    const life = document.createElement('div');
    life.classList.add('life');
    for (let i = 0; i < 3; i++) {
        const hp = document.createElement('img');
        hp.classList.add('life-icon');
        hp.setAttribute('src', `./assets/img/icons/life.png`);
        life.appendChild(hp);
    }
    container.append(life, wrongLettersContainer, guessForm, formToGuessLetter);

    return startGame(guessForm, formToGuessLetter, inputToGuessLetter, wrongLetters, NameToArray, object);
}


function createLetter(character) {
    const guessForm = document.createElement('form');
    guessForm.classList.add('guessForm');
    let i = 0;
    for (let name of character) {
        if (name[0]) {
            const classOfDiv = i === 0 ? `name-container` : i === 1 ? `middlename-container` : `lastName-container`
            const classOfInput = i === 0 ? `name` : i === 1 ? `middlename` : `lastName`
            const div = document.createElement('div');
            div.classList.add(classOfDiv)
            for (let letter of name) {
                const input = document.createElement('input')
                input.setAttribute('type', 'text');
                input.setAttribute('maxlength', '1');
                input.classList.add(`letter-input`);
                input.classList.add(classOfInput);
                div.appendChild(input);
            }
            guessForm.appendChild(div);

        }
        i++;
    }
    const button = document.createElement('button');
    button.innerHTML = "Make a guess";
    button.classList.add('guess-button');
    button.setAttribute("type", "submit");
    guessForm.appendChild(button);
    return guessForm
}

function createElement(element, classes, parent) {
    const El = document.createElement(element);
    El.classList.add(classes);

    if (parent) {
        parent.appendChild(El);
        return
    }
    return El;

}
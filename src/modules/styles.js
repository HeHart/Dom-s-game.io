import {keyInput as entryInput, form} from './dom';
import transition from './transition';
import validaChave from './validaChave';
import keyValidator from './validaChave'

const entryButton = document.querySelector('.entry-button');
const entryContainer = document.querySelector('.entry');
const eye = document.querySelector('.eye');

export default function () {
    let i = true;
    entryButton.addEventListener('mouseenter', () => {
        entryContainer.classList.add('hovered-container');
        entryButton.classList.add('hovered-button');
        eye.classList.add('hovered-eye')
    })
    entryButton.addEventListener('mouseleave', () => {
        console.log(!entryInput.matches(':focus'));
        if(!entryInput.matches(':focus')) {
            entryContainer.classList.remove('hovered-container');
            entryButton.classList.remove('hovered-button')
            eye.classList.remove('hovered-eye')
        }
    })
    
    entryInput.addEventListener('focus', () => {
        entryContainer.classList.add('hovered-container');
        entryButton.classList.add('hovered-button');
        eye.classList.add('hovered-eye')
    })
    entryInput.addEventListener('blur', () => {
        entryContainer.classList.remove('hovered-container');
        entryButton.classList.remove('hovered-button')
        eye.classList.remove('hovered-eye')
    })
    form.addEventListener('submit', async e => {
        e.preventDefault();
        try {
            await keyValidator(entryInput.value);
            i = false;
        } catch (e) {
            console.log('error: ' + e);
        }
    })

    while(!i) return;
}


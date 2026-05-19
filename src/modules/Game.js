import endgame from './endgame';
import endGame from './endgame';

export default function (guessForm, letterForm, inputLetter, errors, character, obj) {
    let life = 3;
    let answeredRight = 0;
    let numberOfErrors = 0;
    const inputs = document.querySelectorAll('.letter-input');
    let livesIcon = document.querySelectorAll('.life-icon');
    const lifeShow = document.querySelector('.life');
    const name = document.querySelectorAll('.name');
    const middleName = document.querySelectorAll('.middlename') || null;
    const lastNocument.querySelectorAll('.lastName') || null;
    const completeName = [name, middleName, lastName];
    let finalResponse = true;
    let correctAnswered = []
    inputs.forEach((input, index) => {
        input.addEventListener('input', e => {
            if(e.target.value.length === 1 && index < inputs.length-1) {
                let i = 1;
                let jumpedTEXT = false;
                while(jumpedTEXT === false) {
                    if(!inputs[index+i].classList.contains('correct-answer')) {
                        inputs[index + i].focus()
                        jumpedTEXT = true;
                     }
                     i++; 
                    }
                }
            }
        )

        input.addEventListener('keydown', (e) => {
            if(e.key ==='Backspace' && index > 0 && e.target.value ==='') {
                let i = 1;
                let jumped = false;
                while(!jumped) {
                    if(!inputs[index - i].classList.contains('correct-answer')) {
                        inputs[index - i].focus()
                        jumped = true;
                    }
                    i++;
                }
            }
        })
    })
        letterForm.addEventListener('submit', e => {
            e.preventDefault();
            let i = 0;
            try {
                if(numberOfErrors < 6) {
                    for(let container of completeName) {
                        for(let index in character[i]){
                            if(inputLetter.value.toLowerCase() === character[i][index].toLowerCase()){
                                const elementToCheck = i === 0? name : i === 1 ? middleName : lastName;
                                elementToCheck[index].value = inputLetter.value.toUpperCase();
                                elementToCheck[index].classList.add('correct-answer');
                                elementToCheck[index].setAttribute('readonly', true);
                                answeredRight = 1
                            }
                        }
                        i++;
                    }
                    if(!answeredRight) {
                        if(errors.textContent.length>0) errors.textContent+= ' - '
                        errors.textContent += inputLetter.value.toLowerCase()
                        numberOfErrors = numberOfErrors + 1;
                    }
                    answeredRight = 0;
                } else {
                    errors.textContent += ' - You cannot try again. Just guess.' 
                    inputLetter.setAttribute('disabled', true)
                    const guessLetterButton = document.querySelector('.guess-letter-button');
                    guessLetterButton.setAttribute('disabled', true);
                }
            } catch (e) {
                console.log(e);
            }
        })

        guessForm.addEventListener('submit', e => {
            e.preventDefault();
            let answer = ""
            const characterName = [];
            
            let i = 0;
            for(let container of completeName) {
                characterName.push(character[i].join(''));
                characterName[i] = characterName[i].replace(',', '').toLowerCase();
                for(let index in character[i]){
                    const elementToCheck = i === 0? name : i === 1 ? middleName : lastName;
                    answer += elementToCheck[index].value.toLowerCase();
                }
                if (container[0] && i<2)answer += ' '
                i++;
            }
            i = 0;
            answer = answer.split(' ');
            for(let i in characterName) {
                correctAnswered[i] = characterName[i] === answer[i]? answer[i] : '';
                if(characterName[i] !== answer[i]) {
                    finalResponse = false;
                }
            }
            const wrong = wrongAnswer();
            if(finalResponse || wrong === 'badValue'){
                return endGame(correctAnswered, characterName, finalResponse);
            }    
    })
}

function wrongAnswer() {
    const lifeAll = document.querySelectorAll('.life-icon');
    console.log(lifeAll)
    if(lifeAll.length>1) {
            lifeAll[lifeAll.length-1].remove();
            return;
    } else {
        return 'badValue'
    }
            
}
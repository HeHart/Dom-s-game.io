const container = document.querySelector('.container');

export default function (answer, correctAnswer, finalValue){
    if (finalValue) {
        WinScreen(answer, correctAnswer);
    } else {
        looseScreen(answer, correctAnswer);
    }
    
}

function WinScreen(answer, correctAnswer) {
    container.innerHTML = "";
    const div = document.createElement('div');
    div.classList.add('win-screen');
    const p = document.createElement('p');
    p.classList.add('win-text');
    let completeName = ''
    for(let name of correctAnswer) {
        completeName = completeName ? `${completeName} ${name} ` : name;
    }
    p.textContent = `You win. The name of the target is ${completeName} and the quantity of letters is ${(completeName.replace(' ', '').length)}`;
    div.appendChild(p);
    container.appendChild(div);
}
function looseScreen(answer, correctAnswer, character) {
    container.innerHTML = "";
    console.log('oi')
    const div = document.createElement('div');
    div.classList.add('loose-screen');
    const p = document.createElement('p');
    p.classList.add('loose-text');
    p.textContent = `You loose.`;
    div.appendChild(p);
    let completeName = ''
    for(let name of correctAnswer) {
        completeName = completeName ? `${completeName} ${name} ` : name;
    }
    const keys = []
    const correct = []
    for(let i in correctAnswer){
        if (answer[i] === correctAnswer[i]) {
            keys[i] = 1;
            correct.push(answer[i]);
        } else {
            keys[i] = 0;
        }
    }
    
    let correctAnsweredNames = []
    let but = 0
    for(let i in keys) {
        console.log(keys[i])
        if(keys[i]) {
            correctAnsweredNames.push(Number(i) === 0? 'Name:': Number(i) === 1 ?  'Middle name:' : 'Last name');
            but = 1;
        }
    }
    if(but) {
        const ul = document.createElement('ul');
        ul.classList.add("loose-text");
        ul.textContent = 'You discovered: ';
        for(let i in correctAnsweredNames) {
            if(correctAnsweredNames[i]) {
                const li = document.createElement('li');
                li.classList.add('loose-text');
                li.textContent = `${correctAnsweredNames[i]} ${correct[i]};`
                ul.appendChild(li);
            }
        }
        div.appendChild(ul);
    }
    container.appendChild(div);
}

const fs = require('fs').promises;
const path = require('path');


function criaPessoa(nome, segundoNome='', sobrenome=''){
    return {
        name: nome, 
        middleName: segundoNome,
        lastName: sobrenome
    }
}
caminho = path.resolve(__dirname, '.', 'characters.json');

async function readArchive(path) {
    return new Promise((resolve, reject) => {
        if(!/\.json$/g.test(path)) reject();
        const data = fs.readFile(path, 'utf8');
        resolve(data);
    })
}


async function createAnotherCharacter(container, key, pessoa, phrase='',  path = caminho) {
    const newArray = [...container, {
        name: pessoa.name,
        middleName: pessoa.middleName,
        lastName: pessoa.lastName,
        phrase: phrase,
        key: key}];
    
    const json = JSON.stringify(newArray, ' ', 2);
    await fs.writeFile(caminho, json);
    console.log('Personagem criado com sucesso.');
}

const dataArray = readArchive(caminho).then(data => {
    const transformArchiveToArray = JSON.parse(data);
    return transformArchiveToArray;
}).then(data => {
    const pessoa = criaPessoa('Belfhegor')
    createAnotherCharacter(data, 'GreenHell', pessoa, 'Beware if you are a demon... or if you are considered one.');
}).catch(e => {
    console.log(`Error: ` + e);
});

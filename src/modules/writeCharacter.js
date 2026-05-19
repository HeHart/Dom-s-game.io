const characters = require('./characters');

const fs = require('fs').promises;
const path = require('path');

export default (caminho, conteudo) => {
    const json = JSON.stringify(conteudo, ' ', 2);
    fs.writeFile(caminho, json, {flag: 'w'});
}


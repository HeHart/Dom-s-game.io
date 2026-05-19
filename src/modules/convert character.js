
const fs = require('fs').promises;
const { table } = require('console');
const path = require('path');
const { stringify } = require('querystring');
const rootCam = path.resolve(__dirname, '.', 'characters.json');
const newPath = path.resolve(__dirname, '.', 'characters.js');

async function Transform(fileDirectory, Newfile){
    let data = await fs.readFile(fileDirectory, 'utf8');
    data = JSON.parse(data);
    console.log(amigo);
    await convertFile(data, Newfile);
    console.log('convertido com sucesso');

}

function convertFile(data, directory) {
    fs.writeFile(directory, `export default ${data}`);
}

Transform(rootCam, newPath);


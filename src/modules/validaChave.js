import characters from './characters.js'
import createGame from "./createGame.js";
import transition from './transition.js';
import loadingScreen from './transition.js'

export default async function(value) {
    for(let character of characters){
        if(value.toLowerCase() === character.key.toLowerCase()){
            try {
               return await loadingScreen(character);
            } catch (e) {
                console.log(e);
            };
            break;
        }
    }
}

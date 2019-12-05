
import LoL from './data/lol/lol.js'
import { filterDataByRol, goToHome} from './data.js'

document.getElementById("backBtn").addEventListener("click", () => goToHome());

document.getElementById("Fighter").addEventListener("click", () => filterDataByRol ("Fighter") );

document.getElementById("Marksman").addEventListener("click", () => filterDataByRol ("Marksman") );

document.getElementById("Mage").addEventListener("click", () => filterDataByRol ("Mage") );

document.getElementById("Assassin").addEventListener("click", () => filterDataByRol ("Assassin") );

document.getElementById("Tank").addEventListener("click", () => filterDataByRol ("Tank") );

document.getElementById("Support").addEventListener("click", () => filterDataByRol ("Support") );


// // funcion que me crea las tarjetidas de cada champ, para version desktop y mobile
// document.getElementById("champ-container").addEventListener("click",()=> showChamps(data));



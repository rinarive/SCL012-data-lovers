
import LoL from './data/lol/lol.js'
import { filterDataByRol, sortBy, goToHome } from './data.js'


export const contenedor = document.getElementById("elemento"); 
export const sort = document.getElementById("sortBy")

document.getElementById("logo").addEventListener("click", () => goToHome());

document.getElementById("Fighter").addEventListener("click", () => filterDataByRol ("Fighter") );

document.getElementById("Marksman").addEventListener("click", () => filterDataByRol ("Marksman") );

document.getElementById("Mage").addEventListener("click", () => filterDataByRol ("Mage") );

document.getElementById("Assassin").addEventListener("click", () => filterDataByRol ("Assassin") );

document.getElementById("Tank").addEventListener("click", () => filterDataByRol ("Tank") );

document.getElementById("Support").addEventListener("click", () => filterDataByRol ("Support") );

// Ordenar AZ - ZA 
document.getElementById("sortBy").addEventListener("change", () => {
let value = document.getElementById("sortBy").value;
sortBy(value);
});


	






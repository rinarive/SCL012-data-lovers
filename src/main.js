import LoL from './data/lol/lol.js'
import { filterDataByRol, goToHome } from './data.js'

document.getElementById("backBtn").addEventListener("click", () => goToHome());

document.getElementById("figther").addEventListener("click", () => filterDataByRol ("figther") );

document.getElementById("Marksman").addEventListener("click", () => filterDataByRol ("Marksman") );

document.getElementById("Mage").addEventListener("click", () => filterDataByRol ("Mage") );

document.getElementById("Assassin").addEventListener("click", () => filterDataByRol ("Assassin") );

document.getElementById("Tank").addEventListener("click", () => filterDataByRol ("Tank") );

document.getElementById("Support").addEventListener("click", () => filterDataByRol ("Support") );
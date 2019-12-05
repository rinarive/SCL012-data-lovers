import LoL from './data/lol/lol.js' 
import { filterDataByRol, goToHome } from './data.js'

document.getElementById("backBtn").addEventListener("click", () => goToHome());

document.getElementById("figther").addEventListener("click", () => filterDataByRol ("figther") );

document.getElementById("Marksman").addEventListener("click", () => filterDataByRol ("Marksman") );

document.getElementById("Mage").addEventListener("click", () => filterDataByRol ("Mage") );

document.getElementById("Assassin").addEventListener("click", () => filterDataByRol ("Assassin") );

document.getElementById("Tank").addEventListener("click", () => filterDataByRol ("Tank") );

document.getElementById("Support").addEventListener("click", () => filterDataByRol ("Support") );

// funcion que me crea las tarjetidas de cada champ, para version desktop y mobile
document.getElementById("champ-container").addEventListener("click",()=> showChamps(data));
function showChamps (data) {
    document.getElementById("items").innerHTML = "";
    //document.getElementById("champ-container-mobile").innerHTML = "";
    data.forEach(champ => {
        document.getElementById("items").innerHTML += `
        <div class="card col s3">
            <div class="card-image waves-effect waves-block waves-light">
                <img class="responsive-img img-champion" src="${champ.splash}">
            </div>
            <div class="card-content">
                <span class="card-title activator">${champ.name}<i class="material-icons right">more_vert</i></span>
                <p class="champ-title">${champ.title}</p>
            </div>
            <div class="card-reveal">
                <span class="card-title">${champ.name}<i class="material-icons right">close</i></span>
                <canvas class="champion-chart"></canvas>
            </div>
        </div>
        `
    })
}

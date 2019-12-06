import LoL from './data/lol/lol.js'
let contenedor = document.getElementById("elemento");
// let backBtn = document.getElementById("backBtn");

//Array vacio para llenarlo de data de LoL (obj type array)
let arrayChampions = [];

//Llenamos el array con la data de LoL, para tratarlo como arreglo y nos reconozca la funcion filter
for (const i in LoL.data) {
  arrayChampions.push(LoL.data[i]);
};

// Funcion para filtrar por Rol 
export const filterDataByRol = (rol) => {
  contenedor.innerHTML = "";
  contenedor.className = "filterChamp"; // Style contenedor tarjetas
  // backBtn.className = "backBtn"; // Style para que este visible 
  
  // Funcion para filtrar
  let result = arrayChampions.filter(element => { // Element= cada vuelta del bucle
    return element.tags.includes(rol);
  });
  // Arreglo con los campeones filtrados por rol 
  result.forEach(element => {
    contenedor.innerHTML +=
      `<div class="elementos">
         <img class="img" src="${element.splash}">
         <h1 class="name">${element.name}</h1>
         <p class"titulo">${element.title}</p>
         <p class"titulo">${element.tags}</p>
       </div>`
  });
};

// Funcion para ir al menu principal
export const goToHome = () => {
  contenedor.className = "elemento";
  backBtn.className = "hidden";
  contenedor.innerHTML = "";
  contenedor.innerHTML = `<article class="titulo">CHOOSE CHAMPION</article>
  <article class="texto"></article>
  <div class="items" data-busqueda="name" data-imagen="data-imagen"></div>`;
}




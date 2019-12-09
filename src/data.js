import LoL from './data/lol/lol.js'
import { contenedor, sort } from './main.js'

//Array vacio para llenarlo de la data de LoL 
let arrayChampions = [];

//Llenamos el array con la data de LoL, para tratarlo como arreglo
for (const i in LoL.data) {
  arrayChampions.push(LoL.data[i]);
};
// FUNCION PARA FILTRAR POR ROL 
export const filterDataByRol = (rol) => {
  contenedor.innerHTML = "";
  contenedor.className = "filterChamp"; // Style contenedor tarjetas
  sort.className = "sortBy"; // Style para que este visible 

  let result = arrayChampions.filter(element => {
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

//FUNCION PARA VOLVER A LA PAGINA PRINCIPAL   
export const goToHome = () => {
  contenedor.className = "elemento";
  contenedor.innerHTML = "";
  sort.className = "hidden";
}

  for (const i in LoL.data) {
    contenedor.innerHTML +=
          `<div class="elementos">
           <img class="img" src="${LoL.data[i].splash}">
           <h1 class="name">${LoL.data[i].name}</h1>
           <p class"titulo">${LoL.data[i].title}</p>

          </div>`
          for (const j in LoL.data[i].tags){
            console.log(LoL.data[i].tags[j]);
          }
  }





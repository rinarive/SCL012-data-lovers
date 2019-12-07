import LoL from './data/lol/lol.js'
import {contenedor,sort} from './main.js'

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
  sort.className = "sortBy"; // Style para que este visible 

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

// Funcion para ir al menu principal html dinamico 
export const goToHome = () => {
  contenedor.className = "elemento";
  contenedor.innerHTML = "";
  sort.className = "hidden";
 
}

export const sortBy = (sortBy) => {
  contenedor.innerHTML = "";

  let result = [];

  if(sortBy === "az"){
    result=arrayChampions.sort((a,b)=>{
      return a.id.localeCompare(b.id)
    });

    result.forEach(element => {
      contenedor.innerHTML +=
        `<div class="elementos">
           <img class="img" src="${element.splash}">
           <h1 class="name">${element.name}</h1>
           <p class"titulo">${element.title}</p>
           <p class"titulo">${element.tags}</p>
         </div>`
    });

  }else if(sortBy === "za") {

    result=arrayChampions.sort((a,b)=>{
      return b.id.localeCompare(a.id)
    });

    result.forEach(element => {
      contenedor.innerHTML +=
        `<div class="elementos">
           <img class="img" src="${element.splash}">
           <h1 class="name">${element.name}</h1>
           <p class"titulo">${element.title}</p>
           <p class"titulo">${element.tags}</p>
         </div>`
    });

  } else { 
    arrayChampions.forEach(element => {
      contenedor.innerHTML +=
        `<div class="elementos">
           <img class="img" src="${element.splash}">
           <h1 class="name">${element.name}</h1>
           <p class"titulo">${element.title}</p>
           <p class"titulo">${element.tags}</p>
         </div>`
    });
  }

};
  




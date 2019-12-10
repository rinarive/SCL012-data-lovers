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
//FUNCION PARA ORDENAR POR AZ - ZA
export const sortBy = (sortBy) => {
  contenedor.innerHTML = "";

  let result = [];

  if (sortBy === "az") {
    result = arrayChampions.sort((a, b) => {
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
  } else if (sortBy === "za") {
    result = arrayChampions.sort((a, b) => {
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
//FUNCION BARRA DE BUSQUEDA 
export const search = (e) => {
  // console.log(e.target.value);
  contenedor.innerHTML = "";
  contenedor.className = "filterChamp"; // Style contenedor tarjetas
  sort.className = "sortBy"; // Style para que este visible 

  let result = arrayChampions.filter(element => { // Element= cada vuelta del bucle
    let a = element.name.toUpperCase();
    return a.includes(e.target.value.toUpperCase());
  });
  result.forEach(element => {
    contenedor.innerHTML +=
    `<div class="elementos">
         <img class="img" src="${element.splash}">
         <h1 class="name">${element.name}</h1>
         <p>${element.title}</p>
         <p>${element.tags}</p>
       </div>`
  });
  e.preventDefault();
};
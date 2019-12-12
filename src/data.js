import LoL from './data/lol/lol.js';

const contenedor = document.getElementById('root'); 
// Identifico barra ordenarpor 
const sort = document.getElementById('sortBy');
// array vacio para llenarlo de la data de LoL 
const arrayChampions = [];
for (const i in LoL.data) {
  arrayChampions.push(LoL.data[i]);
}
// FUNCION PARA FILTRAR POR ROL
export const filterDataByRol = (rol) => {
  contenedor.innerHTML = '';
  contenedor.className = 'filterChamp'; // Style contenedor tarjetas
  sort.className = 'sortBy';// Style para que este visible

  const result = arrayChampions.filter(element => {
    return element.tags.includes(rol);
  });
// Arreglo con los campeones filtrados por rol
  result.forEach(element => {
    contenedor.innerHTML+=
      `<div class='elementos' id="${element.id}">
         <img class="img" src="${element.splash}">
         <h1 class="name">${element.name}</h1>
         <p class"titulo">${element.title}</p>
         <p class"titulo"> Rol: ${element.tags}</p>
         <p class"titulo"> HP: ${element.stats.hp} ❤️ </p>
       </div>`;
  });
  result.forEach(element => {
    document.getElementById(element.id).addEventListener('click', () => showModal(element));
  });
};
// FUNCION PARA VOLVER A LA PAGINA PRINCIPAL   
export const goToHome = () => {
  contenedor.className = 'elemento';
  contenedor.innerHTML = '';
  sort.className = 'hidden';
};
// FUNCION PARA ORDENAR POR AZ - ZA
export const sortBy = (sortBy) => {
  contenedor.innerHTML = '';

  let result = [];

  if (sortBy ==='az') {
    result = arrayChampions.sort((a, b) => {
      return a.id.localeCompare(b.id);
    });
    result.forEach(element => {
      contenedor.innerHTML +=
        `<div class='elementos' id="${element.id}">
           <img class="img" src="${element.splash}">
           <h1 class="name">${element.name}</h1>
           <p class"titulo">${element.title}</p>
           <p class"titulo">${element.tags}</p>
         </div>`;
      
    });
  } else if (sortBy === 'za') {
    result = arrayChampions.sort((a, b) => {
      return b.id.localeCompare(a.id);
    });
    result.forEach(element => {
      contenedor.innerHTML +=
        `<div class='elementos' id="${element.id}">
           <img class="img" src="${element.splash}">
           <h1 class="name">${element.name}</h1>
           <p class"titulo">${element.title}</p>
           <p class"titulo">${element.tags}</p>
         </div>`;
      document.getElementById(element.id).addEventListener('click', () => {
      });
    });
  } else {
    arrayChampions.forEach(element => {
      contenedor.innerHTML +=
        `<div class='elementos' id="${element.id}">
           <img class="img" src="${element.splash}">
           <h1 class="name">${element.name}</h1>
           <p class"titulo">${element.title}</p>
           <p class"titulo">${element.tags}</p>
         </div>`;
      document.getElementById(element.id).addEventListener('click', () => {
      });
    });
  }
};
// FUNCION BARRA DE BUSQUEDA 
export const search = (e) => {
  contenedor.innerHTML = '';
  contenedor.className = 'filterChamp'; // Style contenedor tarjeta
  const result = arrayChampions.filter(element => { // Element= cada vuelta del bucle
    let a = element.name.toUpperCase();
    return a.includes(e.target.value.toUpperCase());
  });
  result.forEach(element => {
    contenedor.innerHTML +=
      `<div class='elementos' id="${element.id}">
         <img class="img" src="${element.splash}">
         <h1 class="name">${element.name}</h1>
         <p class"titulo"> Attack: ${element.info.attack}</p>
         <p class"titulo"> Defense: ${element.info.defense}</p>
         <p class"titulo"> Magic: ${element.info.magic}</p>
         <p class"titulo"> Difficulty: ${element.info.difficulty}</p>
       </div>`;
   
  });
  e.preventDefault();
  result.forEach(element => {
    document.getElementById(element.id).addEventListener("click", () => showModal(element));
  });
};

const showModal = (champion) => {
  var modal = document.getElementById('myModal');
  
  modal.style.display = 'block';
  
  document.getElementById('modal-splash').innerHTML = `<img class="imgModal" src="${champion.splash}">`;
  document.getElementById('modal-blurb').innerHTML = `<p> Leyenda: ${champion.blurb}</p>`
  
  modal.onclick = function () {
    modal.style.display = 'none';
  };
};

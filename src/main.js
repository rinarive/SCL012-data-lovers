import LoL from './data/lol/lol.js';
import { filterChampions, sortChampions, searchChampions } from './data.js';

const arrayChampions = [];

/* eslint-disable guard-for-in */
// eslint-disable-next-line no-restricted-syntax
for (const i in LoL.data) {
  arrayChampions.push(LoL.data[i]);
}

export const contenedor = document.getElementById('root');
export const sort = document.getElementById('sortBy');
export const modal = document.getElementById('myModal');

const showModal = (champion) => {
  modal.style.display = 'block';
  document.getElementById('modal-splash').innerHTML = `<img class="imgModal" src="${champion.splash}">`;
  document.getElementById('modal-splash').innerHTML = `<img class="imgModal" src="${champion.splash}">`;
  document.getElementById('modal-name').innerHTML = `<h1> ${champion.name}</h1>`;
  document.getElementById('modal-title').innerHTML = `<h2> ${champion.title} </h2>`;
  document.getElementById('modal-attack').innerHTML = `<p>Ataque 🗡️ = ${champion.info.attack} </p>`;
  document.getElementById('modal-defense').innerHTML = `<p>Defensa 🛡️ = ${champion.info.defense} </p>`;
  document.getElementById('modal-magic').innerHTML = `<p>Magia 🔮 = ${champion.info.magic} </p>`;
  document.getElementById('modal-difficulty').innerHTML = `<p> Dificultad⚔️ = ${champion.info.difficulty} </p>`;
  modal.onclick = () => {
    modal.style.display = 'none';
  };
};

export const filterDataByRol = (roles) => {
  contenedor.innerHTML = '';
  contenedor.className = 'filterChamp'; // Style contenedor tarjetas
  sort.className = 'sortBy';// Style para que este visible
  const result = filterChampions(roles, arrayChampions);

  // eslint-disable-next-line array-callback-return
  result.map((element) => {
    contenedor.innerHTML += `<div class="elementos" id="${element.id}">
    <img class="img" src="${element.splash}">
    <h1 class="name">${element.name}</h1>
    <h2 class"titulo"> Rol: ${element.tags}</h2>
    <h3 class"titulo">${element.title}</h3>
    <p class"titulo"> HP: ${element.stats.hp} ❤️ </p>
    </div>`;
  });
  // eslint-disable-next-line array-callback-return
  result.map((element) => {
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
export const sortBy = (sortAz) => {
  contenedor.innerHTML = '';
  const result = sortChampions(arrayChampions, sortAz);
  // eslint-disable-next-line array-callback-return
  result.map((element) => {
    contenedor.innerHTML += `<div class="elementos" id="${element.id}">
    <img class="img" src="${element.splash}">
    <h1 class="name">${element.name}</h1>
    <h2 class"titulo"> Rol: ${element.tags}</h2>
    <h3 class"titulo">${element.title}</h3>
    <p class"titulo"> HP: ${element.stats.hp} ❤️ </p>
    </div>`;
    // eslint-disable-next-line array-callback-return
    result.map((i) => {
      if (document.getElementById(i.id) != null) {
        document.getElementById(i.id).addEventListener('click', () => showModal(element));
      }
    });
  });
};

// FUNCION BARRA DE BUSQUEDA
export const search = (e) => {
  contenedor.innerHTML = '';
  contenedor.className = 'filterChamp';
  const result = searchChampions(arrayChampions, e);
  // eslint-disable-next-line array-callback-return
  result.map((element) => {
    contenedor.innerHTML += `<div class="elementos" id="${element.id}">
    <img class="img" src="${element.splash}">
    <h1 class="name">${element.name}</h1>
    <h2 class"titulo"> Rol: ${element.tags}</h2>
    <h3 class"titulo">${element.title}</h3>
    <p class"titulo"> HP: ${element.stats.hp} ❤️ </p>
    </div>`;
  });
  e.preventDefault();
  result.forEach((element) => document.getElementById(element.id).addEventListener('click', () => showModal(element)));
};

// PONGO AL ESCUCHA EL LOGO PARA QUE REGRESE A LA PAG PRINCIPAL
document.getElementById('logo').addEventListener('click', () => goToHome());
// IDENTIFICO LOS BTNS DE LA BARRA NAV Y LOS PONGO AL ESCUCHA DE LA FUNCION FILTAR(filterDataByRol)
document.getElementById('Fighter').addEventListener('click', () => filterDataByRol('Fighter'));
document.getElementById('Marksman').addEventListener('click', () => filterDataByRol('Marksman'));
document.getElementById('Mage').addEventListener('click', () => filterDataByRol('Mage'));
document.getElementById('Assassin').addEventListener('click', () => filterDataByRol('Assassin'));
document.getElementById('Tank').addEventListener('click', () => filterDataByRol('Tank'));
document.getElementById('Support').addEventListener('click', () => filterDataByRol('Support'));

// ORDENAR AZ - ZA (FUNCION SORTBY)
document.getElementById('sortBy').addEventListener('change', () => {
  const value = document.getElementById('sortBy').value;
  sortBy(value);
});

// BARRA DE BUSQUEDA (SEARCH)
document.getElementById('barra-busqueda').addEventListener('keydown', (e) => {
  if (e.keyCode === 13) {
    search(e);
  }
});

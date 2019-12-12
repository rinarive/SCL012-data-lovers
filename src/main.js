import LoL from './data/lol/lol.js';
import { filterDataByRol, sortBy, goToHome, search, } from './data.js';


// PONGO AL ESCUCHA EL LOGO PARA QUE REGRESE A LA PAG PRINCIPAL
document.getElementById('logo').addEventListener('click', () => goToHome());
// IDENTIFICO LOS BTNS DE LA BARRA NAV Y LOS PONGO AL ESCUCHA DE LA FUNCION FILTAR(filterDataByRol)
document.getElementById('Fighter').addEventListener('click', () => filterDataByRol ('Fighter') );
document.getElementById('Marksman').addEventListener('click', () => filterDataByRol ('Marksman') );
document.getElementById('Mage').addEventListener('click', () => filterDataByRol ('Mage') );
document.getElementById('Assassin').addEventListener('click', () => filterDataByRol ('Assassin') );
document.getElementById('Tank').addEventListener('click', () => filterDataByRol ('Tank') );
document.getElementById('Support').addEventListener('click', () => filterDataByRol ('Support') );

// ORDENAR AZ - ZA (FUNCION SORTBY)
document.getElementById('sortBy').addEventListener('change', () => {
let value = document.getElementById('sortBy').value;
sortBy(value);
});

// BARRA DE BUSQUEDA (SEARCH)
document.getElementById('barra-busqueda').addEventListener('keydown', (e) => {
	if (e.keyCode === 13) { 
        search(e);
	   }
});






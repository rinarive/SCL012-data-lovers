<<<<<<< HEAD
import LoL from './data/lol/lol.js'
import { filterDataByRol, goToHome } from './data.js'



document.getElementById("backBtn").addEventListener("click", () => goToHome());

document.getElementById("figther").addEventListener("click", () => filterDataByRol ("figther") );

document.getElementById("Marksman").addEventListener("click", () => filterDataByRol ("Marksman") );

document.getElementById("Mage").addEventListener("click", () => filterDataByRol ("Mage") );

document.getElementById("Assassin").addEventListener("click", () => filterDataByRol ("Assassin") );

document.getElementById("Tank").addEventListener("click", () => filterDataByRol ("Tank") );

document.getElementById("Support").addEventListener("click", () => filterDataByRol ("Support") );
=======

import LoL from './data/lol/lol.js'

// Identifico el contendedor donde quiero añadir las imagenes 
let contenedor = document.getElementById("contenedor");


//

for (const i in LoL.data) {
	contenedor.innerHTML +=
		 `<div class="elementos">
			<img class="img" src="${LoL.data[i].img}">
		 </div>`

}















// import { example } from './data.js';

// console.log(example);

/*
 * console.log(POKEMON);
 * console.log(LoL);
 * console.log(POTTER)
// */
>>>>>>> b14b5a0271f2f98c953c5720e451ccbdbeff1885

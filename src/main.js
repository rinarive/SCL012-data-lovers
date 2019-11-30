
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

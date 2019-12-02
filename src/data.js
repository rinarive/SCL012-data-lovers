import LoL from './data/lol/lol.js'

let contenedor = document.getElementById("contenedor");
let backBtn = document.getElementById("backBtn");

export const goToHome = () => {
  contenedor.className="contenedor";
  backBtn.className="hidden";
  contenedor.innerHTML="";
  contenedor.innerHTML=`<article class="titulo">CHOOSE CHAMPION</article>
  <article class="texto"></article>
  <div class="items" data-busqueda="name" data-imagen="data-imagen"></div>`;
}

export const filterDataByRol = (rol) => {
  
  contenedor.innerHTML="";
  contenedor.className="filterChamp";
  backBtn.className="backBtn";

  for (const i in LoL.data) {
    contenedor.innerHTML +=
     		 `<div class="elementos">
     			<img class="img" src="${LoL.data[i].img}">
          </div>`
          for (const j in LoL.data[i].tags){
            console.log(LoL.data[i].tags[j]);
          }
  }
};
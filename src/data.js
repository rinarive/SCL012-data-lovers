import LoL from './data/lol/lol.js'
let contenedor = document.getElementById("elemento");
let backBtn = document.getElementById("backBtn");

//Creamos un array vacio para llenarlo de data de los campeones (obj type array)
let arrayChampions = [];

//Llenamos el array con la data de LoL, para tratarlo como arreglo y nos reconozca la funcion filter
for (const i in LoL.data) {
  arrayChampions.push(LoL.data[i]);
};

// Funcion para filtrar por Rol 
export const filterDataByRol = (rol) => {

  contenedor.innerHTML = "";
  contenedor.className = "filterChamp"; // Style contenedor tarjetas
  backBtn.className = "backBtn"; // Style para que este visible 

  // funcion para filtrar
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
    </div>`
  });
};

//funcion para ir al menu principal
export const goToHome = () => {
  contenedor.className = "elemento";
  backBtn.className = "hidden";
  contenedor.innerHTML = "";
  contenedor.innerHTML = `<article class="titulo">CHOOSE CHAMPION</article>
  <article class="texto"></article>
  <div class="items" data-busqueda="name" data-imagen="data-imagen"></div>`;
}
// // Funcion Click Tarjetas
// export const showChamps= (data) => {
  //   document.getElementById("items").innerHTML = "";
  //   //document.getElementById("champ-container-mobile").innerHTML = "";
  //   data.forEach(champ => {
    //       document.getElementById("items").innerHTML += `
    //       <div class="card col s3">
    //           <div class="card-image waves-effect waves-block waves-light">
//               <img class="responsive-img img-champion" src="${champ.splash}">
//           </div>
//           <div class="card-content">
//               <span class="card-title activator">${champ.name}<i class="material-icons right">more_vert</i></span>
//               <p class="champ-title">${champ.title}</p>
//           </div>
//           <div class="card-reveal">
//               <span class="card-title">${champ.name}<i class="material-icons right">close</i></span>
//               <canvas class="champion-chart"></canvas>
//           </div>
//       </div>
//       `
//   })
//   data.forEach(champ => {
//       document.getElementById("champ-container-mobile").innerHTML += `
//       <div class="col s3 m2">
//           <div class="card mobile-version">
//               <div class="card-image">
//                   <img src="${champ.img}" class="champ-sprite">
//               </div>
//               <div class="card-content mobile-version">
//               ${champ.name}
//               </div>
//           </div>
//       </div>
//       `
//   })
// }




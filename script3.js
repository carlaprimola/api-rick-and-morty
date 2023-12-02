const URL = "https://rickandmortyapi.com/api/character/"; //Llamamos a la API
const personaje = document.querySelector("#characters"); //Main
const boton = document.querySelector("#nuevopersonaje"); //Button
const titulo = document.querySelector("#titulo"); //h1


//Cuando hagas clic en el boton...
boton.addEventListener("click", () => {

    //Me limpias el HTML..
    personaje.innerHTML = "";
    //Agregas la clase oculto del h1 para que se oculte con la transicion
    titulo.classList.add('oculto');

fetch(URL)
    .then((response) => response.json()) //Me transformas la respuesta en JSON
    .then((data) => {

        //Mostramos 1 personaje de forma aleatoria
            const idAleatorio = Math.floor(Math.random() * data.results.length);
          
            //Creamos un img para mostrar la imagen del personaje aleatorio
            const image = document.createElement("img");
            image.src = data.results[idAleatorio].image;
            personaje.append(image);

             //Creamos un p para mostrar: name
             const p = document.createElement("p");
             p.textContent = data.results[idAleatorio].name;
             personaje.append(p);

             //Creamos un div para mostrar: species y status
             const p2 = document.createElement("div");
             p2.textContent = data.results[idAleatorio].species + " - " + data.results[idAleatorio].status;
             personaje.append(p2);
            

             setTimeout(() => {
                titulo.classList.remove('oculto');
            }, 400); 
    })
   
    .catch(error=> {
        console.log('La hemos cagao');

});

});

// OTRA MANERA DE HACERLO, poniendo una constante a cuando seleccionas el id:

// const URL = "https://rickandmortyapi.com/api/character/";
// const personaje = document.querySelector("#characters");
// const boton = document.querySelector("#nuevopersonaje")


// boton.addEventListener("click", () => {

//     personaje.innerHTML = "";

// fetch(URL)
//     .then((response) => response.json())
//     .then((data) => {

//             const idAleatorio = Math.floor(Math.random() * data.results.length);
//             const characterAleatorio = data.results[idAleatorio] //----CREAMOS UNA CONSTANTE NUEVA-----

//             const p = document.createElement("p");
//             p.textContent = characterAleatorio.name + " - " + characterAleatorio.species + " - " + characterAleatorio.status;
//             personaje.append(p);

//             const image = document.createElement("img");
//             image.src = characterAleatorio.image;
//             personaje.append(image);
            
//     })
   
//     .catch(error=> {
//         console.log('La hemos cagao');

// });

// });
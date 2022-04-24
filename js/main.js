import {fn} from './modules/function.js'

addEventListener("DOMContentLoaded", async()=>{
    let peticion = await fetch("backend/php/api.php");
    let obj = await peticion.json();

    let content = document.querySelector(".content");
    let titulo = document.querySelector(".content h2");
    let parrafo = document.querySelector(".content p");
    

    console.log(obj);
    

    
    titulo.insertAdjacentText("beforeend", obj.inicio.titulo);
    parrafo.insertAdjacentText("beforeend", fn.descripcion(obj.inicio));

    let a = document.createElement('A');
    a.insertAdjacentText("beforeend", obj.inicio.boton.nombre);
    a.href = obj.inicio.boton.ruta;
    a.classList = "btn";
    content.insertAdjacentElement("beforeend", a);
})
import {fn} from './modules/function.js'

addEventListener("DOMContentLoaded", async()=>{
    let peticion = await fetch("backend/php/api.php");
    let obj = await peticion.json();

    let fragmen = (container="LI", lista)=>{
        let frag = new DocumentFragment();
        for (let i = 0; i < lista.length; i++) {
            let cont = document.createElement(container);
            let a = document.createElement('A');
            Object.assign(a, lista[i]);
            cont.insertAdjacentElement("beforeend", a);
            frag.append(cont);
        }
        return frag;


    }

    let content = document.querySelector(".content");
    let header = document.querySelector("header");
    let titulo = document.querySelector(".content h2");
    let parrafo = document.querySelector(".content p");
    let menu = document.querySelector("header ul");
    

    console.log(obj);
    

    titulo.insertAdjacentText("beforeend", obj.inicio.titulo);
    parrafo.insertAdjacentText("beforeend", fn.descripcion(obj.inicio));

    let a = document.createElement('A');
    a.insertAdjacentText("beforeend", obj.inicio.boton.nombre);
    a.href = obj.inicio.boton.ruta;
    a.classList = "btn";
    content.insertAdjacentElement("beforeend", a);

    let img = document.createElement('IMG');
    img.src = obj.menu.img;
    img.width = "120";
    header.insertAdjacentElement("beforeend",img);

    
    menu.append(fragmen("LI",fn.lista(obj.menu,"href","innerText")));



})
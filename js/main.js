import {fn} from './modules/function.js'

addEventListener("DOMContentLoaded", async()=>{
    let peticion = await fetch("backend/php/api.php");
    let obj = await peticion.json();

    let content = document.querySelector(".content");
    let header = document.querySelector("header");
    let titulo = document.querySelector(".content h2");
    let parrafo = document.querySelector(".content p");
    let menu = document.querySelector("header ul");
    let sobreContainer = document.querySelector(".about .row .col50");
    let sobreParrafo = document.querySelector(".about .row .col50 p");
    let sobreimg = document.querySelector(".about .row .col50 .imgBx");
    let aperitivosContainer = document.querySelectorAll(".menu .title");
    let aperitivosParrafo = document.querySelector(".menu .title p");
    let listaAperitivos = document.querySelector(".menu .content");

    console.log(obj);

    let sobre = document.querySelector(".about");
    let Aperitivos = document.querySelector(".menu");

    //Lista menus en el DMO
    let listaMenu = (lista, container="LI", hijo="A")=>{
        let frag = new DocumentFragment();
        for (let i = 0; i < lista.length; i++) {
            let cont = document.createElement(container);
            let a = document.createElement(hijo);
            Object.assign(a, lista[i]);
            cont.insertAdjacentElement("beforeend", a);
            frag.append(cont);
        }
        return frag;


    }

    titulo.insertAdjacentText("beforeend", obj.inicio.titulo);
    parrafo.insertAdjacentText("beforeend", fn.descripcion(obj.inicio));
    let a = document.createElement('A');
    a.insertAdjacentText("beforeend", obj.inicio.boton.nombre);
    a.href = obj.inicio.boton.ruta;
    a.classList = "btn";
    content.insertAdjacentElement("beforeend", a);

    //menu
    let img = document.createElement('IMG');
    img.src = obj.menu.img;
    img.width = "120";
    header.insertAdjacentElement("beforeend",img);
    menu.append(listaMenu(fn.lista(obj.menu,"href","innerText")));


    //sobre
    sobreContainer.insertAdjacentHTML("afterbegin", fn.tituloDiseno(obj.aboutUs.titulo));
    sobreParrafo.insertAdjacentText("beforeend", fn.descripcion(obj.aboutUs));
    img = document.createElement('IMG');
    img.src = obj.aboutUs.img;
    sobreimg.insertAdjacentElement("beforeend", img);

    //lista aperitivos
    aperitivosContainer[0].insertAdjacentHTML("afterbegin", fn.tituloDiseno(obj.ourmenu.titulo,1));
    aperitivosParrafo.insertAdjacentText("beforeend", fn.descripcion(obj.ourmenu));
    listaAperitivos.insertAdjacentHTML("afterbegin", fn.listaAperitivos(obj.ourmenu));
    a = document.createElement('A');
    a.insertAdjacentText("beforeend", obj.ourmenu.boton.nombre);
    a.href = obj.ourmenu.boton.ruta;
    a.classList = "btn";
    aperitivosContainer[1].insertAdjacentElement("beforeend", a);
})
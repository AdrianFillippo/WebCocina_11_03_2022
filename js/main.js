import {fn} from './modules/function.js'

addEventListener("DOMContentLoaded", async()=>{
    let peticion = await fetch("https://adrianfillippo.000webhostapp.com/WebCocina_11_03_2022/backend/php/api.php");
    let obj = await peticion.json();

    let caja = (lista, container="LI", hijo="A")=>{
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
    

    let content = document.querySelector(".content");
    let header = document.querySelector("header");
    let titulo = document.querySelector(".content h2");
    let parrafo = document.querySelector(".content p");
    let menu = document.querySelector("header ul");
    let sobre = document.querySelector("#about .row .col50");
    let sobreParrafo = document.querySelector("#about .row .col50 p");
    let sobreimg = document.querySelector("#about .row .col50 .imgBx");

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
    menu.append(caja(fn.lista(obj.menu,"href","innerText")));

    //sobre
    sobre.insertAdjacentHTML("afterbegin", fn.tituloDiseno(obj.aboutUs.titulo));
    sobreParrafo.insertAdjacentText("beforeend", fn.descripcion(obj.aboutUs));
    img = document.createElement('IMG');
    img.src = obj.aboutUs.img;
    sobreimg.insertAdjacentElement("beforeend", img);
    

})
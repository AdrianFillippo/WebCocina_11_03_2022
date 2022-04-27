const descripcion = (obj)=>{
    let data = new String();
    Object.values(obj.descripcion).forEach(element => {
        data += element;
    });
    return data;
}

const lista = (obj,atrr,val)=>{
    let data = [];
    Object.values(obj.enlace).forEach(element => {
        let obj = [];
        let value = Object.values(element);
        //console.log(key);
        obj[`${val}`] = value[0];
        obj[`${atrr}`] = value[1];
        data.push({...obj});

    });
    return data;

}

const tituloDiseno = (obj,ubicacion=0,cantidad=1)=>{
    let palabras = obj.split(" ");
    let extraer = palabras[ubicacion].slice(0, cantidad);
    palabras[ubicacion] = palabras[ubicacion].replace(extraer, '');
    palabras[ubicacion] = `<span>${extraer}</span>${palabras[ubicacion]}`;
    palabras = `<h2 class="titleText">${palabras.join(" ")}</h2>`;
    return palabras;
}

const listaAperitivos = (obj)=>{
    let plantilla = "";
    obj.comidas.forEach(element => {
        plantilla += `
            <div class="box">
                <div class="imgBx">
                  <img src="${element.img}">
                </div>
                <div class="text" id="text">    
                  <h3>${element.titulo}</h3>
                </div>
            </div>`;
    });  
    return plantilla;      
}
const listaExpert = (obj)=>{
    let expertos = "";
    obj.equipo.forEach(element => {
        expertos += `
            <div class="box">
                <div class="imgBx">
                  <img src="${element.img}">
                </div>
                <div class="text" id="text">    
                  <h3>${element.titulo}</h3>
                </div>
            </div>`;
    }); 
    return expertos;      
}
const testimonios2 = (obj)=>{
    let testimo = "";
    obj.opiniones.forEach(element => {
        testimo += `
            <div class="box">
                <div class="imgBx">
                  <img src="${element.img}">
                </div>
                <div class="content" id="content">    
                  <p>${element.descripcion}</p>
                </div>
                <div class="text" id="text">    
                  <h3>${element.nombre}</h3>
                </div>
                
            </div>`;
    }); 
    return testimo;      
}


export const fn = {
    descripcion,
    lista,
    tituloDiseno,
    listaAperitivos,
    listaExpert,
    testimonios2

        
};


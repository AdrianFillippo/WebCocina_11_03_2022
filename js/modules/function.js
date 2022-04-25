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


export const fn = {
    descripcion,
    lista,
    tituloDiseno
        
};


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

export const fn = {
    descripcion,
    lista
        
};


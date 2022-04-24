const descripcion = (obj)=>{
    let data = new String();
    Object.values(obj.descripcion).forEach(element => {
        data += element;
    });
    return data;
}



export const fn = {
    descripcion
        
};


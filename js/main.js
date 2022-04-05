addEventListener("DOMContentLoaded", async()=>{
    let peticion = await fetch("backend/php/api.php");
    let obj = await peticion.json();
    document.body.insertAdjacentHTML("beforeend", `<img src="${obj.img}" />`)
})
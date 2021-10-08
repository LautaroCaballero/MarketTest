let caja= document.getElementById("caja")
let botonj= document.getElementById("jewelery")
let botoncitos= document.getElementsByClassName("botoncito") 
// let botone= document.getElementById("electronics")

function carga(categoria="electronics"){
    caja.innerHTML=`<div class="loader">Loading...</div>`
    console.log("desde la funcion lucho puto", categoria)
    fetch('https://fakestoreapi.com/products/category/'+categoria)
            .then(respuesta=>respuesta.json())
            .then(respuesta=>{
                console.log(respuesta)
                caja.innerHTML=``
                respuesta.map(item=>{
                    
                    caja.innerHTML+=`<div class="sep">
                    <div class="imagen">
                        <img src="${item.image}" alt="">
                        
                    </div>
                    <div class="flex">
                    <div class="subt">${item.title}</div>
                    <div class="desc">${item.description}</div>
                <div class="price">$${item.price}</div>
                </div>
                </div>`
                })
            
            })
            

}
Array.from(botoncitos).forEach(element => {
    element.addEventListener("click", (e)=>{
    
        
        carga(e.target.id)
    })
});

// botoncitos.foreach(element => {
//     element.addEventListener("click", (e)=>{
    
//         console.log(e.target.id, "desde lucho puto")
//         // carga(e.target.id)
//     })
// });

// botonj.addEventListener("click", (e)=>{
    
//     console.log(e.target.id, "desde lucho puto")
//     carga(e.target.id)
// }

// )
function esperarTiempo(ms, mensaje){
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            resolve(mensaje)
        }, ms )
    })
}

function esperarTiempoConCatch(error = false){
    return new Promise( (resolve, reject) => {
        if( error ){
            reject("Algo salio mal")
        } else {
            resolve("Todo salio bien")
        }
    })
}

function A(){
    console.log("A")
}
// function B(){
//     console.log("B")

// } 
function C(){
    console.log("C")
    
} 

// B()
// esperarTiempo(1000, "B").then( (valor) => console.log(valor))

esperarTiempoConCatch()
.then(async (mensaje) => {
    A()
    const resultado = await esperarTiempo(1000, mensaje)
    console.log(resultado)
    C()
    })
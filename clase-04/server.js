import express from "express"
import { readFile } from "fs"

// Creo una instancia con express
const app = express ()

app.use(express.urlencoded({"extended": true}))
app.use(express.json())
app.use("/home", express.static("public"))


// app.get("/home", (req, res) => {
//         readFile("public/index.html", function(err, data){
//         if(err) console.error("No se encontro el archivo")
//         res.write(data)
//         res.end(); 
//     })
// })

app.get( "/:nombre", (req, res) => {
    console.log("Hola params", req.params)
    res.send("Hola! ")
} )

app.get( "/", (req, res) => {
    console.log("Hola con body", req.body)
    res.send("Hola! " + req.body.nombre)
} )
app.post ("/", (req, res) => {
    console.log(req.body)
    res.send("HOOLA")
} )


// Escucha en tal puerto
app.listen(2025, () => {
    console.log("Funcionando")
})
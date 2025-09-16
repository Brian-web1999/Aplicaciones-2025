// Importar módulos
import http from "http";
import productos from "./data/productos.js";
import { createPage, createProductList } from "./pages/utils.js"; 

import { readFile } from "fs";

const server = http.createServer(function (request, response) {

    console.log(request.url)

    switch (request.url) {
        case "/":
            response.write(createPage("Home", "Nombre y apellido"));
            break;
        case "/materia":
            response.write(createPage("Materia", "Aplicaciones Hibridas"));
            break;
        case "/profesor":
            response.write(createPage("Profesor", "ññ"));
            break;
        case "/cafes":
            response.write(createPage("Listado de cafes", createProductList(productos)));
            break;
        case "/contacto.html":
            readFile("public/contacto.html", function(err, data){
                if(err) console.error("No se encontro el archivo")
                response.write(data)
                response.end(); 
            })
            break       
        case "/style.css":
            readFile("public/style.css", function(err, data){
                if(err) console.error("No se encontro el archivo")
                response.write(data)
                response.end(); 
            })
            break
        default:
            response.write(createPage("404", "Pagina no encontrada"));
            break;
    }
    
});

server.listen(2025, () => {
    console.log("Funcionando!...");
});

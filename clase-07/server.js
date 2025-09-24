import express from "express";
import ProductosRoute from "./routes/productos.routes.js"
import ProductosApiRoute from "./api/routes/productos.api.routes.js"
const app = express();

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(ProductosRoute)
app.use(ProductosApiRoute)
app.use("/api/productos", ProductosApiRoute)

app.listen(2025, () => console.log("funcionando"));
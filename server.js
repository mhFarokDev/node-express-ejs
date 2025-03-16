import dotenv from "dotenv"
import express from "express"
import colors from "colors"
import pageRouter from "./routers/pageRouters.js"
import expressEjsLayouts from "express-ejs-layouts"
// init express
const app = express()


// dotenv assets
dotenv.config()
const PORT = process.env.SERVER_PORT || 5050

// config express
app.use(express.static("public"))

// form data 
app.use(express.json())
app.use(express.urlencoded({extended : false}))

// ejs layout load
app.use(expressEjsLayouts)


// routers
app.use("/", pageRouter)


// EJS init view engin
app.set("view engine", "ejs")





app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`.bgBlue);
})





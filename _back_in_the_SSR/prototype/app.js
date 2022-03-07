const express = require("express")
const app = express()

app.use(express.static("public"))

//Importere en 'dependency' der benytter express' fil system
const fileSystem = require("fs")

//readFileSync indlaeser html elementet forud for ekskveringen og bremser indlaesningsforloebet (??? passer det)
const nav = fileSystem.readFileSync("./public/components/nav.html").toString()

const frontpage = fileSystem.readFileSync("./public/pages/frontpage/frontpage.html").toString()

const completeFrontpage = nav + frontpage

app.get("/", (req, res) => {
    //res.sendFile(__dirname + "/public/frontpage/frontpage.html")
    //naar vi bruger 'fs' (express' fil system) omskriver det ovenstaaende med det nedenstaaende
    res.send(completeFrontpage)
})

app.get("/cheesegallery", (req, res) => {
    res.sendFile(__dirname + "/public/pages/cheesegallery/cheesegallery.html")
})

app.listen(3000, () => console.log("Here I am on ", 3000))
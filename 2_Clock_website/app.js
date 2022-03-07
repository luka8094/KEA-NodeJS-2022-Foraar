const express = require("express")
const app = express()


//sådan sender man en html file via Node
app.get("/", (req,res) => { 
    res.sendFile(__dirname + "/public/time-assignment.html")
})

//dirname giver Direkte global adgang til den stig hvor projektet kører fra
//console.log(__dirname)

app.get("/time-assignment", (req,res) => {
    res.send(`<h1>Sup, here's a clock</h1>`)
})

app.listen(8080, () => console.log("Server is running on ", 8080))
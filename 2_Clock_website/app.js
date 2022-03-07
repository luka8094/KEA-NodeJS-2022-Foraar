const express = require("express")
const app = express()

const fileSystem = require("fs")

const clockPage = fileSystem.readFileSync("./public/time-assignment.html")

//dirname giver Direkte global adgang til den stig hvor projektet kører fra
//console.log(__dirname)

app.get("/time-assignment", (req,res) => {
    res.send(""+clockPage)
})

app.listen(3000, () => console.log("Server is running on ", 3000))
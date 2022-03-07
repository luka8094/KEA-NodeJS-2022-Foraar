

const express = require("express")
const app = express()

const books = [
{ id:1 ,title: "a book" },
{ id:2 ,title: "a second book" },
{ id:3 ,title: "a third book" }
]

app.get("/", (req, res) => {
    res.send({ data : books})
})

app.get("/:id", (req, res) => {
    res.send(req.params.id)
})

app.post("/", (req, res) => {
    res.send({ data : books})
})

app.patch("/", (req, res) => {
    res.send({ data : books})
})

app.delete("/", (req, res) => {
    res.send({ data : books})
})


app.listen(8080, () => console.log("Running on server", 8080))
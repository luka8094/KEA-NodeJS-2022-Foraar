const express = require("express")
const app = express()

app.use(express.json())

let books = [
    { id: 1, title: "Peace and War" },
    { id: 2, title: "Art of war" }
]

let idCounter = 2

app.get("/books", (req, res) => {
    res.send({ data: books })
})

app.get("/books/:id", (req, res) => {
    const foundMovie = books.find(book => book.id === Number(req.params.id))    
    foundMovie ? res.send({ data: foundMovie }) : res.status(204).send({})
})

app.post("/books", (req, res) => {
    const movieToCreate = req.body
    movieToCreate.id = ++CURRENT_ID
    books.push(movieToCreate)

    res.send({ data: movieToCreate })
})

app.patch("/books/:id", (req, res) => {
    const foundMovieIndex = books.findIndex(book => book.id === Number(req.params.id))
    if (foundMovieIndex !== -1) {
        const foundMovie = books[foundMovieIndex]
        const movieToUpdateWith = { ...foundMovie, ...req.body, id: foundMovie.id }
        books[foundMovieIndex] = movieToUpdateWith
        res.send({ data: movieToUpdateWith })
    } else {
        res.status(404).send({})
    } 
})

app.delete("/books/:id", (req, res) => {
    const foundMovieIndex = books.findIndex(book => book.id === Number(req.params.id))
    if (foundMovieIndex !== -1) {
        books.splice(foundMovieIndex, 1)
        res.send({ })
    } else {
        res.status(404).send({ })
    }
})


app.listen(8080, () => {
    console.log("Server is running on port", 8080)
})

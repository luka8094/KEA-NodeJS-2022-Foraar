const express = require("express")
const app = express()

app.use(express.json())

//Book data
let groceries = [
    { id: 1, title: "banana" },
    { id: 2, title: "apple" }
]

let idTracker = 2

//Get all groceries data objects
app.get("/groceries", (req, res) => {

    res.send({ data: groceries })

})

//Get data on one particular item 
app.get("/groceries/:id", (req, res) => {

    const doesTheGroceryExist = groceries.find(item => item.id === Number(req.params.id))    
    doesTheGroceryExist ? res.send({ data: doesTheGroceryExist }) : res.status(204).send({})

})

//Create a new item in the data
app.post("/groceries", (req, res) => {

    const newItemInCRUD = req.body
    newItemInCRUD.id = ++idTracker
 groceries.push(newItemInCRUD)

    res.send({ data: newItemInCRUD })

})

//Update one particular item from the data
app.patch("/groceries/:id", (req, res) => {

    const groceriesIndexNumber = groceries.findIndex(item => item.id === Number(req.params.id))

    if (groceriesIndexNumber !== -1) {

        const foundGrocery = groceries[groceriesIndexNumber]
        //spead operater [... ] to fill in predefined and unmodified data from found item
        const itemToUpdateWith = {...foundGrocery, ...req.body, id: foundGrocery.id }
     groceries[groceriesIndexNumber] = itemToUpdateWith
        res.send({ data: itemToUpdateWith })

    } else {

        res.status(404).send({})

    } 

})

//Delete a grocery item from the data
app.delete("/groceries/:id", (req, res) => {

    const groceriesIndexNumber = groceries.findIndex(item => item.id === Number(req.params.id))

    if (groceriesIndexNumber !== -1) {

     groceries.splice(groceriesIndexNumber, 1)
        res.send({ })

    } else {

        res.status(404).send({ })

    }

})

//Establish connection to express server
app.listen(8080, () => {

    console.log("Server is running on port", 8080)

})

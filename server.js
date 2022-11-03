//////////////////////////////////////////
//Declare dependencies, create app objects
//////////////////////////////////////////
const express = require('express')
const app = express();
const PORT = 3000;


//////////////////////////////////////////
//Routes
//////////////////////////////////////////

app.get('/greeting/:name', (req,res) => {
    res.send(`Hello, ${req.params.name}`)
})

app.get('/tip/:total/:tipPercentage', (req,res) => {

    const total = req.params.total
    const Percentage = req.params.tipPercentage 
    const answer = (total * Percentage)
    res.send(`Your tip is: $` +  answer)
})

//////////////////////////////////////////
//Server listener
//////////////////////////////////////////
app.listen(3000, () => {
    console.log('now were cooking!')
})
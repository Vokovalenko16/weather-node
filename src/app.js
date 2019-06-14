const path = require('path')
const express = require("express")

const app = express()

console.log(__dirname);
console.log(path.join(__dirname, "../public"))

app.get('', (req,res) => {
    res.send("Hello express.")
});

app.get('/home', (req,res) => {
    res.send("Here is my Homepage.")
})

app.get('/about', (req,res) => {
    res.send('<h1> This is my Testing page. </h1>')
})


app.get('/weather', (req,res) => {
    res.send({
        name: "Vlad",
        location: "Dnipro"
    })
})



app.listen(3000, () => {
    console.log("Listening on PORT 3000 !")
})
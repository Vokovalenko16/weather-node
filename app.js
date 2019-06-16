const path = require('path')
const express = require("express")
const hbs = require('hbs')

const app = express()


const PATH = path.join(__dirname, "../public")


app.set('view engine','hbs')
app.use(express.static(PATH))

app.get('',(req, res) => {
    res.render('index')
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
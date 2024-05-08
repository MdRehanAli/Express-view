
const express = require('express');

const app = express();


const port = process.env.PORT || 8000

// ejs setup
app.set('view engine', 'ejs')
app.set('views', './views')

// route setup 
app.get('/', (req, res) => {
    res.render('index')
})
app.get('/about', (req, res) => {
    res.render('index')
})



app.listen(port, () => {
    console.log(`server is running port ${port}`)
})
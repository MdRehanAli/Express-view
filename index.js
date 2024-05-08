
const express = require('express');

const app = express();

const port = process.env.PORT || 8000

// Mongo Connnection 

// const dbURI = ""
// mongoose.connect(dbURi)
//     .then((result) => {app.listen(4000)})
//     .catch(err => console.log(err))


// ejs setup
app.set('view engine', 'ejs')
app.set('views', './views')

// route setup 
app.get('/', (req, res) => {
    const blogs = [
        { title: "Rehan", snepet: "Lorem ipsum 1" },
        { title: "Rehan 2", snepet: "Lorem ipsum 2" },
        { title: "Rehan 3", snepet: "Lorem ipsum 3" }
    ]
    res.render('index')
})
app.get('/about', (req, res) => {
    res.render('index')
})



app.listen(port, () => {
    console.log(`server is running port ${port}`)
})
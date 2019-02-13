const express = require('express')

const app = express()

app.get('/', (req, res) => {
    console.log(req.path)
    const file = __dirname + '/index.html'
    res.sendFile(file)
})
app.get('*', (req, res) => {
    console.log(req.path)
    const file = __dirname + req.path
    res.sendFile(file)
})

app.listen(8080, () => console.log('Listening on port 8080...'))

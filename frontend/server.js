const express = require('express')
const path = require('path')
let root = path.join(__dirname, 'build/')
const PORT = process.env.PORT || 80

const app = express()
app.use(express.static(root))

app.get('/*', (req, res) => {
    res.sendFile('index.html', { root })
})

app.listen(PORT)

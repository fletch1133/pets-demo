const express = require('express')
const cors = require('cors')
const app = express()
const path = require('path')
app.use(express.json())
app.use(cors())

app.use(express.static(`public`))

app.get('/', (req,res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/index.html'))
})

app.listen(4000, () => console.log(`server running on 4000`))
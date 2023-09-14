import express from 'express'
const cors = require('cors')

const app = express()
const port = 3030


app.use(cors())
app.get('/', (req, res) => {
    res.send('2')
})
app.get('/login', (req, res) => {
    console.log("get")
    res.json({
        isOk: true
    })
})

app.listen(port, () => {
    console.log(`Example apdocp listening on port ${port}`)
})
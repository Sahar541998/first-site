import express from 'express'

const app = express()
const port = 3030

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example apdocp listening on port ${port}`)
})
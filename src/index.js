const express = require('express')
const bookRouter = require('./routers/bookrouter')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(bookRouter)


app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
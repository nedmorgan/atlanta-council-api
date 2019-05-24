let express = require('express')

let app = express()

let councilRoute = require('./routes/council')

app.use(councilRoute)
app.use(express.static('public'))

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.info(`We have liftoff on ${PORT}`)
})

const express = require("express")
var cors = require('cors')
const app = express()

app.use(cors())

app.get('/post', (req, res) => {
  console.log("request incomimg")
  res.json({
    id: ['001', '002', '003', '004','005','006']
  })
})

const PORT = 3333
app.listen(PORT, err => {
  if (err) {
    console.error("there is an error")
  }
  console.log(`serving on http://localhost:${PORT}`)
})
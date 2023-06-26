import express from 'express'

const app = express()

app.get('/', (req, res) => {
  return res.send({ ok: 'Hello World'})
})

app.listen('3000', () => {
  console.log(`Server listening on port 3000 at http://localhost:3000`)
})
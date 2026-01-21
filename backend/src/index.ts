import express from 'express'
import { db } from '../server/utils/db'

const app = express()
app.use(express.json())

app.get('/api/_db-test', async (req, res) => {
  const result = await db.query('select 1 as ok')
  res.json(result.rows[0])
})

const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log(`Backend listening on http://localhost:${port}`)
})

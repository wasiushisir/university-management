import express, { Application, Request, Response } from 'express'

const app: Application = express()
import cors from 'cors'
app.use(cors())
app.use(express.urlencoded({ extended: true }))
// const port = 3000

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

export default app

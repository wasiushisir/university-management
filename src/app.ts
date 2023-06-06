import express, { Application, Request, Response } from 'express'

const app: Application = express()
import cors from 'cors'
import { createUser } from './app/modules/users/user.service'
import userRoute from './app/modules/users/user.route'

app.use(cors())
app.use(express.urlencoded({ extended: true }))

// Application routes

app.use('/api/v1/users/', userRoute)

// const port = 3000

app.get('/', async (req: Request, res: Response) => {
  // await createUser({
  //   id: '888',
  //   password: '123',
  //   role: 'student',
  // })
  res.send('Hello World!')
})

export default app

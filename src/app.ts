import express, { Request, Response } from 'express'
import cors from 'cors'
const app = express()

// parser
app.use(express.json())
app.use(cors())

// const appController = (req: Request, res: Response) => {
//   res.send('Hello World!')
// }

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

export default app

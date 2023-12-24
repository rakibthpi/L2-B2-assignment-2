import app from './app'
import mongoose from 'mongoose'

const port = 5000

async function server() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/test')
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    })
  } catch (error) {
    console.log(error)
  }
}

server().catch((err) => console.log(err))

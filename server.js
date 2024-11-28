import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import ConnectDB from './config/db.js'
import messageRouter from './routes/messageRoutes.js'

const app = express()
dotenv.config()
const PORT = process.env.PORT

//Parse incoming requests with json
app.use(express.json())

//Routes
app.use('/api/message', messageRouter)

//Resolving __dirname for ES module
const __dirname = path.resolve()

//User client app
app.use(express.static(path.join(__dirname, '/client/dist')))

//Render the client app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/dist/index.html'))
})

//Connect database
ConnectDB()
app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`))

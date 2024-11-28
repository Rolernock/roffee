import mongoose from 'mongoose'

const ConnectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_ATLAS)
    console.log(`DB conneced on: ${conn.connection.host}`)
  } catch (err) {
    console.log(err.message)
    process.exit(1)
  }
}

export default ConnectDB

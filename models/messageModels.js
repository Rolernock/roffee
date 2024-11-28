import mongoose from 'mongoose'
const { Schema } = mongoose

const messageSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    message: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
)

const MessageModel = mongoose.model('Message', messageSchema)
export default MessageModel

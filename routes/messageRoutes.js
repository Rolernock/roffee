import express from 'express'
import { validateMessage } from '../middleware/validateMessage.js'
import {
  readMessages,
  sendMessage,
  deleteMessage
} from '../controllers/messageController.js'
const router = express.Router()

router.route('/').get(readMessages).post(validateMessage, sendMessage)
router.delete('/:msgId', deleteMessage)

export default router

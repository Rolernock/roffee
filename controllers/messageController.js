import MessageModel from '../models/messageModels.js'
import { validationResult } from 'express-validator'

export const readMessages = async (req, res) => {
  try {
    const messages = await MessageModel.find()
    if (!messages)
      return res.status(400).json({ errors: [{ msg: 'Message not found.' }] })
    return res.json(messages)
  } catch (err) {
    const msg = err.message
    return res.status(500).json({ errors: [{ msg }] })
  }
}

export const sendMessage = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() })
  try {
    const { name, email, phone, message } = req.body
    const msgInfo = { name, email, phone, message }
    await MessageModel.create(msgInfo)
    return res.json({ msg: 'Message sent.' })
  } catch (err) {
    const msg = err.message
    return res.status(500).json({ errors: [{ msg }] })
  }
}

export const deleteMessage = async (req, res) => {
  try {
    const { msgId } = req.params
    const message = await MessageModel.findById(msgId)
    if (!message) return res.status(404).json({ msg: 'Message not found!' })
    await MessageModel.findByIdAndDelete(msgId)
    return res.json({ msg: 'Message deleted.' })
  } catch (error) {
    const msg = err.message
    return res.status(500).json({ errors: [{ msg }] })
  }
}
